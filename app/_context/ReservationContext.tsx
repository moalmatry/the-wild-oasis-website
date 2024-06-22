"use client";
import { ReservationContextType, ReservationProviderProps } from "@/types";
import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

const ReservationProvider = ({ children }: ReservationProviderProps) => {
  const initialState = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(ReservationContext);

  if (context === undefined) throw new Error(`Context used outside provider`);

  return context;
};

export { ReservationProvider, useReservation };
