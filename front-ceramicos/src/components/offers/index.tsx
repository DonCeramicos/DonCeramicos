'use client'
import { ContextApp, ICeramicos } from "@/context/context";
import { useContext } from "react";
import { Product_Card } from "../Product_Card";


export const Offers = () => {
    const { ofertas } = useContext(ContextApp);

    return (
        <div id="ofertas" className="h-[97vh] md:h-[91vh] relative z-0 flex flex-col justify-center scroll-mt-16 bg-custom">
            <h1 className="font-poiret-one text-6xl w-[24rem] text-left mx-8 font-bold md:text-[8.8rem] md:w-[46rem] md:mx-1">
                OFERTAS DE LA SEMANA
            </h1>

            {
                ofertas.map((ceramico: ICeramicos) => (
<Product_Card ceramico={ceramico} key={ceramico.id} isInOffersSection />
                ))
            }

        </div>
    );
};