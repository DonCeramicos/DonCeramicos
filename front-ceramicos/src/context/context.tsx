"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { getProducts, getDestacados, getPegamentos, getPorcelanatos } from "@/helpers/index";
import { ICeramicos, Idestacadas, Ipegamentos, Iporcelanatos } from "@/types";

interface IContextProps {
  ceramicos: ICeramicos[];
  setCeramicos: (ceramicos: ICeramicos[]) => void;
  ceramicosOffers: ICeramicos[];
  destacadas: Idestacadas[];
  pegamentos: Ipegamentos[];
  porcelanatos: Iporcelanatos[];
  pegamentosOffers: Ipegamentos[];
  porcelanatosOffers: Iporcelanatos[];
}

interface ContextProviderProps {
  children: ReactNode;
}

// Context por defecto
export const ContextApp = createContext<IContextProps>({
  ceramicos: [],
  setCeramicos: () => {},
  ceramicosOffers: [],
  destacadas: [],
  pegamentos: [],
  porcelanatos: [],
  pegamentosOffers: [],
  porcelanatosOffers: [],
});



export const Context = ({ children }: ContextProviderProps) => {
  const [ceramicos, setCeramicos] = useState<ICeramicos[]>([]);
  const [ceramicosOffers, setCeramicosOffers] = useState<ICeramicos[]>([]);
  const [pegamentosOffers, setPegamentosOffers] = useState<Ipegamentos[]>([]);
  const [porcelanatosOffers, setPorcelanatosOffers] = useState<Iporcelanatos[]>([]);
  const [destacadas, setDestacadas] = useState<Idestacadas[]>([]);
  const [pegamentos, setPegamentos] = useState<Ipegamentos[]>([]);
  const [porcelanatos, setPorcelanatos] = useState<Iporcelanatos[]>([]);

  useEffect(() => {
    const fetchCeramicos = async () => {
      const data = await getProducts();
      setCeramicos(data.filter((ceramico: ICeramicos) => ceramico.oferta === false));
      setCeramicosOffers(data.filter((ceramico: ICeramicos) => ceramico.oferta));
    };
    const fetchDestacados = async () => {
      const data = await getDestacados();
      setDestacadas(data);
    };
    const fetchPegamentos = async () => {
      const data = await getPegamentos();
      setPegamentos(data.filter((pegamento: Ipegamentos) => pegamento.oferta === false));
      setPegamentosOffers(data.filter((pegamento: Ipegamentos) => pegamento.oferta));
    };
    const fetchPorcelanatos = async () => {
      const data = await getPorcelanatos();
      setPorcelanatos(data.filter((porcelanato: Iporcelanatos) => porcelanato.oferta === false));
      setPorcelanatosOffers(data.filter((porcelanato: Iporcelanatos) => porcelanato.oferta));
    }
    fetchCeramicos();
    fetchDestacados();
    fetchPegamentos();
    fetchPorcelanatos();
  }, []);

  const value = { ceramicos, setCeramicos, ceramicosOffers, destacadas, pegamentos, porcelanatos, pegamentosOffers, porcelanatosOffers };

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
