"use client";
import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/serverActions/action";

interface ReservationListProps {
  bookings: {
    id: number | null;
    guestId: number | null;
    startDate: string | null;
    endDate: string | null;
    numNights: number | null;
    totalPrice: number | null;
    numGuests: number | null;
    created_at: string | null;
    cabins: { name: string | null; image: string | null } | null;
  }[];
}

export default function ReservationList({ bookings }: ReservationListProps) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBooking, bookingId) => {
      return curBooking.filter(
        (booking) => Number(booking.id) !== Number(bookingId)
      );
    }
  );

  async function handleDelete(bookingId: string) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <>
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </>
  );
}
