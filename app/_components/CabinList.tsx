import React from "react";
// import { unstable_noStore } from "next/cache";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

export interface CabinListProps {
  filter: string;
}

export default async function CabinList({ filter }: CabinListProps) {
  // not working right now
  // unstable_noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;
  let displayedCabins = cabins;
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity !== null && cabin.maxCapacity <= 3
    );
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) =>
        cabin.maxCapacity !== null &&
        cabin.maxCapacity >= 3 &&
        cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity !== null && cabin.maxCapacity <= 8
    );

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
