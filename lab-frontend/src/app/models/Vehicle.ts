import { Brand } from './Brand';
import { Owner } from './Owner';

export interface Vehicle {
  id: number;
  model: string;
  color: string;
  price: number;
  brand: Brand; // Ajuste para la relación con Brand
  owner: Owner; // Ajuste para la relación con Owner
}