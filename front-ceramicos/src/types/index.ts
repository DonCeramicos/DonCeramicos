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
  oferta: boolean;
  nombre: string;
  opcion_2?: string;
  opcion_3?: string;
  opcion_4?: string;
}
export interface Ipegamentos {
  id: string;
  imagen: string;
  oferta: boolean;
  nombre: string;
  opcion_2?: string;
  opcion_3?: string;
  opcion_4?: string;
}


export interface IForm {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

export interface Ierror {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}

export interface ITouched {
  name: boolean;
  surname: boolean;
  phone: boolean;
  email: boolean;
  message: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}