export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  meli_code: string;
  phone_number?: string;
  // role?: "owner" | "renter" | "buyer";
}

export interface Manager extends Person {
  access_level: number;
  manager_id: string;
}

export interface Estate {
  id: number;
  property_id: string;
  owner_id: number;
  address: string;
  geo_location: string;
  type:
    | "residential"
    | "commercial"
    | "raw land"
    | "industrial"
    | "special purpose";
  area: number;
  room_count: number;
  description: string;
  for: "rent" | "sale" | "any";
  price: number | null;
  mortgage: number | null;
  rent: number | null;
  registration_date: Date;
}
export type Rows = Person | Manager | Estate;
