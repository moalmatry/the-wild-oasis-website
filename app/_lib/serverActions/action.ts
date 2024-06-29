"use server";

import { auth, signIn, signOut } from "@/app/_lib/authentication/auth";
import { supabase } from "../supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData: FormData) {
  // console.log(formData);
  const session: any = await auth();
  const id = session?.user?.guestId || "";
  if (!session) throw new Error("You must be logged in");

  const nationalID = String(formData.get("nationalID"));
  const [nationality, countryFlag] = String(formData.get("nationality")).split(
    "%"
  );

  if (!/^[a-zA-Z0-9]{6,14}$/.test(nationalID))
    throw new Error("pleas provide a  valid national identifier");

  const updateData = {
    nationalID,
    countryFlag,
    nationality,
  };

  console.log(id);

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  console.log(error);
  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
  console.log(data);
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
