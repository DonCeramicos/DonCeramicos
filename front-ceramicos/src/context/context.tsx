"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { getProducts, getDestacados } from "@/helpers/index";

export interface ICeramicos {
  id: string;
  nombre: string;
  valor: number;
  imagen: string;
  dimensiones: string;
  oferta?: boolean;
}

export interface Idestacadas {
  id: string;
  nombre: string;
  valor: number;
  imagen: string;
  dimensiones: string;
  cantidadXcajas: number;
  oferta: number;
}

interface IContextProps {
  ceramicos: ICeramicos[];
  setCeramicos: (ceramicos: ICeramicos[]) => void;
  ofertas: ICeramicos[];
  destacadas: Idestacadas[]
}

// Context por defecto
export const ContextApp = createContext<IContextProps>({
  ceramicos: [],
  setCeramicos: () => {},
  ofertas: [],
  destacadas: [],
});

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = ({ children }: ContextProviderProps) => {
  const [ceramicos, setCeramicos] = useState<ICeramicos[]>([]);
  const [ofertas, setOfertas] = useState<ICeramicos[]>([]);
  const [destacadas, setDestacadas] = useState<Idestacadas[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setCeramicos(data);
      setOfertas(data.filter((ceramico: ICeramicos) => ceramico.oferta));
    };
    const fetchData2 = async () => {
      const data = await getDestacados();
      setDestacadas(data);
      console.log(data);
      
    }
    fetchData();
    fetchData2();
  }, []);

  const value = { ceramicos, setCeramicos, ofertas, destacadas };

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
