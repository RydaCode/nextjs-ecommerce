import { z } from "zod";

export const loginSchema = z.object({
  login_id: z
    .string()
    .nonempty("Email or Phone number is required"),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});