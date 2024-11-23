import z from "zod";

export const FormSchema = z.object({
  name: z.string().describe("Name").min(1, "Name must be atleast 1 character"),
  title: z.string().describe("Title").min(1, "Title is required"),
  location: z
    .string()
    .describe("Title")
    .min(3, "Location must be more than two charcter"),
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z
    .string()
    .describe("Password")
    .min(6, "Password must be minimum 6 characters"),
});

export const SignUpFormSchema = z
  .object({
    name: z
      .string()
      .describe("Name")
      .min(1, "Name must be atleast 1 character"),
    title: z.string().describe("Title").min(1, "Title is required"),
    location: z
      .string()
      .describe("Title")
      .min(3, "Location must be more than two charcter"),
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Comfirm Password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export const LoginFormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z
    .string()
    .describe("Password")
    .min(6, "Password must be minimum 6 characters"),
});

export type FarmerSchema = {
  email: string;
  name: string;
  title: string;
  location: string;
};

export type ProduceSchema = {
  id: string;
  photoId: string;
  name: string;
  price: number;
  quantity: number;
};
