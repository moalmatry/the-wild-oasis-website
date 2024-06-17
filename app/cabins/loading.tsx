import React from "react";
import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl">Loading cabins data...</p>
    </div>
  );
}
