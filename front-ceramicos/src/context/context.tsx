"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { getProducts, getDestacados, getPegamentos, getPorcelanatos } from "@/helpers/index";
import { ICeramicos, Idestacadas, Ipegamentos, Iporcelanatos } from "@/types";

interface IContextProps {
  ceramicos: ICeramicos[];
  setCeramicos: (ceramicos: ICeramicos[]) => void;
  ofertas: ICeramicos[];
  destacadas: Idestacadas[];
  pegamentos: Ipegamentos[];
  porcelanatos: Iporcelanatos[];
}

interface ContextProviderProps {
  children: ReactNode;
}

// Context por defecto
export const ContextApp = createContext<IContextProps>({
  ceramicos: [],
  setCeramicos: () => {},
  ofertas: [],
  destacadas: [],
  pegamentos: [],
  porcelanatos: [],
});



export const Context = ({ children }: ContextProviderProps) => {
  const [ceramicos, setCeramicos] = useState<ICeramicos[]>([]);
  const [ofertas, setOfertas] = useState<ICeramicos[]>([]);
  const [destacadas, setDestacadas] = useState<Idestacadas[]>([]);
  const [pegamentos, setPegamentos] = useState<Ipegamentos[]>([]);
  const [porcelanatos, setPorcelanatos] = useState<Iporcelanatos[]>([]);

  useEffect(() => {
    const fetchCeramicos = async () => {
      const data = await getProducts();
      setCeramicos(data);
      setOfertas(data.filter((ceramico: ICeramicos) => ceramico.oferta));
    };
    const fetchDestacados = async () => {
      const data = await getDestacados();
      setDestacadas(data);
      console.log(data);
    };
    const fetchPegamentos = async () => {
      const data = await getPegamentos();
      setPegamentos(data);
      console.log(data);
    };
    const fetchPorcelanatos = async () => {
      const data = await getPorcelanatos();
      setPorcelanatos(data);
      console.log(data);
    }
    fetchCeramicos();
    fetchDestacados();
    fetchPegamentos();
    fetchPorcelanatos();
  }, []);

  const value = { ceramicos, setCeramicos, ofertas, destacadas, pegamentos, porcelanatos };

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
