// lib/validators/profile.ts
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  title: z.string().trim().optional().or(z.literal("")),
  company: z.string().trim().optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\- ()]{7,20}$/, "Invalid phone")
    .optional()
    .or(z.literal("")),
  email: z.string().trim().email("Invalid email"),
  website: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  twitter: z.string().trim().optional().or(z.literal("")),
  linkedin: z.string().trim().optional().or(z.literal("")),
  github: z.string().trim().optional().or(z.literal("")),
  avatarUrl: z.string().url().optional().or(z.literal("")),
  logoUrl: z.string().url().optional().or(z.literal("")),
  visibility: z.object({
    name: z.boolean(),
    title: z.boolean(),
    company: z.boolean(),
    phone: z.boolean(),
    email: z.boolean(),
    website: z.boolean(),
    twitter: z.boolean().optional(),
    linkedin: z.boolean().optional(),
    github: z.boolean().optional(),
    avatarUrl: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
  }),
});
export type ProfileInput = z.infer<typeof profileSchema>;
