import React from "react";
import { auth } from "@/app/_lib/authentication/auth";
import { Session } from "@/types";

export const metadata = {
  title: "Account",
};

export default async function AccountPage() {
  const session: Session | null = await auth();
  console.log(session?.user?.guestId);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome , {session?.user?.name}
    </h2>
  );
}
