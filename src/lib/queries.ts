"use server";

import { signIn as authSignIn, signOut as authSignOut } from "@/lib/auth";
import { FormSchema } from "./types";
import { z } from "zod";

export async function actionLoginUser({
  email,
  password,
}: Partial<z.infer<typeof FormSchema>>) {
  if (email === "null" && password === "null")
    return { data: null, error: "Please signup first" };
  await authSignIn("credentials", { redirect: false, email, password });
  return { data: null, error: null };
}

export async function signOut() {
  await authSignOut();
  return { data: null, error: null };
}

export async function actionSignUpUser({
  email,
  password,
  location,
  name,
  title,
}: z.infer<typeof FormSchema>) {
  console.log(email, password, location, name, title);
  return { data: null, error: null };
}

export async function getUserByEmailAndPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log(email, password);
  return {
    id: 1,
    fullName: "najmudeen ahmed",
    age: 18,
    password: "123456",
    email: "jumiklein525@gmail.com",
    createdAt: "2024-06-23 16:05:26.954952",
    updatedAt: "2024-06-23 16:05:26.954952",
  };
}
