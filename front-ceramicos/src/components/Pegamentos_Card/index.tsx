"use client";
import { Ipegamentos } from "@/types";
import Image from "next/image";

type PegamentoCardProps = {
  pegamento: Ipegamentos;
  isInOffersSection?: boolean;
};

export const Pegamento_Card = ({
  pegamento,
  isInOffersSection = false,
}: PegamentoCardProps) => {



  return (
    <article
      className="relative h-[270px] w-[170px] rounded-lg p-2 bg-[#1a19197b] flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"

    >
      {isInOffersSection && pegamento.oferta && (
        <div className="absolute top-[-1px] left-[-1px] overflow-hidden w-[76px] h-[76px]">
          <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50">
            ¡OFERTA!
          </div>
        </div>
      )}

      <Image
        src={pegamento.imagen || "/placeholder.png"}
        alt={pegamento.nombre}
        width={500}
        height={500}
        className="object-cover rounded h-[180px] w-full hover:scale-[1.03] transition-transform duration-300"
        loading="lazy"
      />

      <div className="p-1 flex flex-col items-center text-[13px] w-full text-[#c0b283] font-phudu mt-2 tracking-wide">
        <p className="color-font-2">{pegamento.nombre}</p>
      </div>

      <div className="flex flex-col items-center w-full mt-2">
        <p className="color-font-2">{pegamento.opcion_2}</p>
        <p className="color-font-2">{pegamento.opcion_3}</p>
        <p className="color-font-2">{pegamento.opcion_4}</p>     
      </div>
    </article>
  );
};
