import { jwtDecode } from "jwt-decode";

const ACCESS_KEY = "authToken";

const isBrowser = typeof window !== "undefined";

export const authService = {
    async getAccessToken() {
        if (!isBrowser) return null;
        return localStorage.getItem(ACCESS_KEY);
    },

    async setAccessToken(token) {
        if (!isBrowser) return;
        localStorage.setItem(ACCESS_KEY, token);
    },

    async clear() {
        if (!isBrowser) return;
        localStorage.removeItem(ACCESS_KEY);
    },

    decode(token) {
        return jwtDecode(token);
    },

    isExpired(token) {
        const { exp } = jwtDecode(token);
        return Date.now() >= exp * 1000;
    },
};