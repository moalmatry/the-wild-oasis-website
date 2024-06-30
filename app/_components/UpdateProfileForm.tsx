"use client";
import { updateGuest } from "@/app/_lib/serverActions/action";
import { UpdateProfileProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function UpdateProfile({ children, guest }: UpdateProfileProps) {
  const [count, setCount] = useState();

  return (
    <form
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      action={updateGuest}
    >
      <div className="space-y-2">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          name="fullName"
          defaultValue={guest?.fullName || "user"}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          defaultValue={guest?.email || "example@example.com"}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between relative">
          <label htmlFor="nationality">Where are you from?</label>
          <div className="relative w-5 h-5">
            <Image
              src={guest?.countryFlag || ""}
              alt="Country flag"
              className="h-5 rounded-sm"
              fill
            />
          </div>
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={guest?.nationalID || ""}
          id="nationalID"
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  );
}
