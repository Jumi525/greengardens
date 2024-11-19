"use server";

import { signIn as authSignIn, signOut as authSignOut } from "@/lib/auth";

export async function signIn() {
  await authSignIn("credentials", { redirectTo: "/app/products" });
}

export async function signOut() {
  await authSignOut();
  return { data: null, error: null };
}

export async function actionSignUpUser() {
  return { data: null, error: null };
}

export async function getUserByEmailAndPassword() {
  return {
    id: 1,
    fullName: "mock full name",
    age: 18,
    password: "mock password",
    email: "mock-email@mock.com",
    createdAt: "2024-06-23 16:05:26.954952",
    updatedAt: "2024-06-23 16:05:26.954952",
  };
}
