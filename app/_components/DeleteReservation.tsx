"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "../_lib/serverActions/action";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

interface DeleteReservationProps {
  bookingId: string;
  onDelete: (bookingId: string) => Promise<void>;
}

function DeleteReservation({ bookingId, onDelete }: DeleteReservationProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("are you sure you want to delete"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
      disabled={isPending}
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
