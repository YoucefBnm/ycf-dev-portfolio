import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email().min(8),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  projectTitle: z.string().optional(),
  websiteUrl: z.string().url().optional(),
  projectType: z.enum(["ecommerce", "portfolio", "personal", "business"]),
  branding: z.enum(["yes", "no"]),
  socialLinks: z.string().optional(),
  projectDescription: z.string(),
});
