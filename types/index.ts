import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

export interface LayoutProps {
  children: React.ReactNode;
}

//** CabinCard types  **
export interface CabinCardProps {
  cabin: {
    id: number;
    name: string | null;
    maxCapacity: number | null;
    regularPrice: number | null;
    discount: number | null;
    image: string | null;
  };
}

//**  CabinPage  **

export interface CabinIdPageProps {
  params: { cabinId: string };
}

export type Cabin = {
  created_at: string;
  description: string | null;
  discount: number | null;
  id: number;
  image: string | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
} | null;

//**  ProfilePage  **
//**  SelectCountry  **
export interface SelectCountryProps {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}

export interface Settings {
  breakfastPrice: number | null;
  created_at: string;
  id: number;
  maxBookingLength: number | null;
  maxGuestsPerBooking: number | null;
  minBookingLength: number | null;
}

export interface DateSelectorProps {
  settings: Settings;
  cabin: Cabin;
  bookedDates: Date[];
}

export interface ReservationFormProps {
  cabin: Cabin;
  user: User | undefined;
}

export interface CabinProps extends ReservationFormProps {}

//**  SelectCountry  **
export interface UpdateProfileProps extends LayoutProps {
  guest: {
    countryFlag: string | null;
    created_at: string;
    email: string | null;
    fullName: string | null;
    id: number;
    nationalID: string | null;
    nationality: string | null;
  } | null;
}

//**  Filter Component  **

export interface FilterButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: string;
}

//** ReservationContext **

export interface ReservationContextType {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
}

export interface ReservationProviderProps extends LayoutProps {}

// ** NextAuth **

type ISODateString = string;

export interface DefaultSession {
  user?: User;
  expires: ISODateString;
}

export interface Session extends DefaultSession {}

export interface User {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  guestId?: string;
}

//**  supabase types  **

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          cabinId: number | null;
          cabinPrice: number | null;
          created_at: string;
          endDate: string | null;
          extraPrice: number | null;
          guestId: number | null;
          hasBreakfast: boolean | null;
          id: number;
          isPaid: boolean | null;
          numGuests: number | null;
          numNights: number | null;
          observations: string | null;
          startDate: string | null;
          status: string | null;
          totalPrice: number | null;
        };
        Insert: {
          cabinId?: number | null;
          cabinPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extraPrice?: number | null;
          guestId?: number | null;
          hasBreakfast?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Update: {
          cabinId?: number | null;
          cabinPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extraPrice?: number | null;
          guestId?: number | null;
          hasBreakfast?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_cabinId_fkey";
            columns: ["cabinId"];
            isOneToOne: false;
            referencedRelation: "cabins";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bookings_guestId_fkey";
            columns: ["guestId"];
            isOneToOne: false;
            referencedRelation: "guests";
            referencedColumns: ["id"];
          }
        ];
      };
      cabins: {
        Row: {
          created_at: string;
          description: string | null;
          discount: number | null;
          id: number;
          image: string | null;
          maxCapacity: number | null;
          name: string | null;
          regularPrice: number | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          discount?: number | null;
          id?: number;
          image?: string | null;
          maxCapacity?: number | null;
          name?: string | null;
          regularPrice?: number | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          discount?: number | null;
          id?: number;
          image?: string | null;
          maxCapacity?: number | null;
          name?: string | null;
          regularPrice?: number | null;
        };
        Relationships: [];
      };
      guests: {
        Row: {
          countryFlag: string | null;
          created_at: string;
          email: string | null;
          fullName: string | null;
          id: number;
          nationalID: string | null;
          nationality: string | null;
        };
        Insert: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalID?: string | null;
          nationality?: string | null;
        };
        Update: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalID?: string | null;
          nationality?: string | null;
        };
        Relationships: [];
      };
      settings: {
        Row: {
          breakfastPrice: number | null;
          created_at: string;
          id: number;
          maxBookingLength: number | null;
          maxGuestsPerBooking: number | null;
          minBookingLength: number | null;
        };
        Insert: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          maxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Update: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          maxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
