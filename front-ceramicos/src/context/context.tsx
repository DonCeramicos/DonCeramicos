"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { getProducts } from "@/helpers/index";

export interface ICeramicos {
  id: string;
  nombre: string;
  valor: number;
  imagen: string;
  dimensiones: string;
  oferta: boolean;
}

interface IContextProps {
  ceramicos: ICeramicos[];
  setCeramicos: (ceramicos: ICeramicos[]) => void;
  ofertas: ICeramicos[];
}

// Context por defecto
export const ContextApp = createContext<IContextProps>({
  ceramicos: [],
  setCeramicos: () => {},
  ofertas: [],
});

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = ({ children }: ContextProviderProps) => {
  const [ceramicos, setCeramicos] = useState<ICeramicos[]>([]);
  const [ofertas, setOfertas] = useState<ICeramicos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setCeramicos(data);
      setOfertas(data.filter((ceramico: ICeramicos) => ceramico.oferta));
    };
    fetchData();
  }, []);

  const value = { ceramicos, setCeramicos, ofertas };

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
