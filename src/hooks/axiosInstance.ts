import axios from "axios";

// =========================
// ENV
// =========================
const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI;
const API_KEY = process.env.NEXT_PUBLIC_NERANDS_API_KEY;

// =========================
// SIMPLE TOKEN STORAGE (WEB)
// Replace this with cookies/localStorage or your authService
// =========================
const tokenStorage = {
  getAccessToken: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("accessToken");
  },

  setAccessToken: (token) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("accessToken", token);
  },

  clear: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("accessToken");
  },
};

// =========================
// AXIOS INSTANCE
// =========================
const axiosInstance = axios.create({
  baseURL: SERVER_URI,
  withCredentials: true, // IMPORTANT for httpOnly cookies (refresh token)
  timeout: 10000,
});

// =========================
// REFRESH CONTROL
// =========================
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// =========================
// REQUEST INTERCEPTOR
// =========================
axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (API_KEY) {
      config.headers["x-api-key"] = API_KEY;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =========================
// RESPONSE INTERCEPTOR (AUTO REFRESH)
// =========================
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // If no response or not 401 → just fail
    if (!error.response) {
      return Promise.reject(error);
    }

    // Prevent infinite loop
    if (originalRequest.url?.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    // =========================
    // HANDLE 401
    // =========================
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // If refresh already in progress → queue requests
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        // backend uses httpOnly cookie for refresh token
        const { data } = await axiosInstance.post("/auth/refresh");

        const newAccessToken = data.accessToken;

        tokenStorage.setAccessToken(newAccessToken);

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        tokenStorage.clear();

        // if (typeof window !== "undefined") {
        //   window.location.href = "/signin";
        // }

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;