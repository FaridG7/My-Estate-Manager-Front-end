export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  meli_code: string;
  phone_number?: string;
  role?:"owner"|"renter"|"buyer"
}

export interface Manager extends Person {
  access_level: number;
  manager_id: string;
}

export type Rows = Person | Manager