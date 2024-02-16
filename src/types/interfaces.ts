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
  address?: string;
  geo_location?: string;
  type:
    | "residential"
    | "commercial"
    | "raw land"
    | "industrial"
    | "special purpose";
  area: number;
  room_count: number;
  description?: string;
  for: "rent" | "sale" | "any";
  price?: number;
  mortgage?: number;
  rent?: number;
  registration_date: Date;
}

interface Contract {
  id: number;
  contract_id: string;
  estate_id: number;
  manager_id: number;
  commission_fee: number;
}

export interface SaleContract extends Contract {
  sale_date: Date;
  price: number;
  buyer_id: number;
}

export interface RentContract extends Contract {
  start_date: Date;
  expire_date: Date;
  mortgage: number;
  rent: number;
  renter_id: number;
}

export type Rows =
  | Person[]
  | Manager[]
  | Estate[]
  | SaleContract[]
  | RentContract[];
