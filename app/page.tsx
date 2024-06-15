import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to paradise!</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
