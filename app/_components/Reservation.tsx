import React from "react";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { Cabin } from "@/types";
import { auth } from "@/app/_lib/authentication/auth";
import LoginMessage from "@/app/_components/LoginMessage";

interface ReservationProps {
  cabin: Cabin;
}

export default async function Reservation({ cabin }: ReservationProps) {
  const cabinId = typeof cabin?.id === "number" ? cabin?.id : 0;
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);

  const session = await auth();
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm user={session.user} cabin={cabin} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
