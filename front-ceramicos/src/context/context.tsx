'use client'
import { createContext, useState, ReactNode, useEffect } from "react";
import { getProducts } from "@/helpers/index";

interface ICeramicos {
    name: string;
    price: number;
    image: string;
    dimension: string;
}

interface IContextProps {
    ceramicos: ICeramicos[];
    setCeramicos: (ceramicos: ICeramicos[]) => void;
}

// Context por defecto
export const ContextApp = createContext<IContextProps>({
    ceramicos: [],
    setCeramicos: () => {}
});

interface ContextProviderProps {
    children: ReactNode;
}

export const Context = ({ children }: ContextProviderProps) => {
    const [ceramicos, setCeramicos] = useState<ICeramicos[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await getProducts();
    setCeramicos(data); 
  };
  fetchData();
}, []);




    const value = { ceramicos, setCeramicos };

    return (
        <ContextApp.Provider value={value}>
            {children}
        </ContextApp.Provider>
    );
}
