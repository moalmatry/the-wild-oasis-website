import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Link from "next/link";
import Image from "next/image";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

interface ReservationCardProps {
  booking: {
    id: number | null;
    guestId: number | null;
    startDate: string | null;
    endDate: string | null;
    numNights: number | null;
    totalPrice: number | null;
    numGuests: number | null;
    created_at: string | null;
    cabins: { name: string | null; image: string | null } | null;
  } | null;
  onDelete: (bookingId: string) => Promise<void>;
}

function ReservationCard({ booking, onDelete }: ReservationCardProps) {
  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image
          src={booking?.cabins?.image || ""}
          alt={`Cabin ${booking?.cabins?.name}`}
          className="object-cover border-r border-primary-800"
          fill
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {booking?.numNights} nights in Cabin {booking?.cabins?.name}
          </h3>
          {isPast(new Date(booking?.startDate || "")) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(booking?.startDate || ""), "EEE, MMM dd yyyy")} (
          {isToday(new Date(booking?.startDate || ""))
            ? "Today"
            : formatDistanceFromNow(booking?.startDate || "")}
          ) &mdash;{" "}
          {format(new Date(booking?.endDate || ""), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">
            ${booking?.totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {booking?.numGuests} guest{(booking?.numGuests || 0) > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Booked{" "}
            {format(new Date(booking?.created_at || ""), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-[100px]">
        {!isPast(String(booking?.startDate)) && (
          <>
            <Link
              href={`/account/reservations/edit/${booking?.id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation
              onDelete={onDelete}
              bookingId={String(booking?.id)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
