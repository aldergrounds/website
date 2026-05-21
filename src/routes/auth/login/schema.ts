import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string("E-mail is required.")
    .email("E-mail invalid.")
    .max(100, "E-mail must be a maximum of 100 characters."),
  password: z
    .string("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .max(50, "Password must be a maximum of 50 characters long.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number."),
});

export type FormSchema = typeof formSchema;
