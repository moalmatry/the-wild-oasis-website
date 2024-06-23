"use server";

import { signIn } from "@/app/_lib/authentication/auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}
