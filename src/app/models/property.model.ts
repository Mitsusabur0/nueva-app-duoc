import { Client } from './client.model';

export interface Property {
  id: number;
  type: string;
  address: string;
  owner: Client; // This creates a link to the Client model
  price: number;
  ggcc: number;
  rooms: number;
  bathrooms: number;
}
