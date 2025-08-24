// lib/validators/auth.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  password: z.string().min(6, "Min 6 characters"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  password: z.string().min(6, "Min 6 characters"),
  confirm: z.string().min(6, "Min 6 characters"),
}).refine((d) => d.password === d.confirm, {
  path: ["confirm"],
  message: "Passwords do not match",
});
export type SignupInput = z.infer<typeof signupSchema>;
