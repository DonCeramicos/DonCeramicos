import { ReactNode } from "react";

export interface ICeramicos {
  id: string;
  nombre: string;
  valor: number;
  imagen: string[];
  ambiente: string;
  dimensiones: string;
  oferta?: boolean;
  cantidad?: number;
  descripcion?: string;
  categoria?: string;
  marca?: string;
}

export interface Idestacadas {
  id: string;
  nombre: string;
  valor: number;
  imagen: string[];
  ambiente: string;
  dimensiones: string;
  oferta: number;
  cantidad?: number;
  descripcion?: string;
  categoria?: string;
  marca?: string;
}

export interface Iporcelanatos {
  id: string;
  imagen: string[];
  ambiente: string;
  opcion_1: string;
  opcion_2: string;
  opcion_3: string;
  opcion_4: string;
}
export interface Ipegamentos {
  id: string;
  imagen: string;
  opcion_1: string;
  opcion_2: string; 
  opcion_3: string;
  opcion_4: string; 
}