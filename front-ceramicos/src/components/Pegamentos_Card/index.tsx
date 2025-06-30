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
      className="relative w-[170px] sm:w-[160px] h-[250px] bg-[#1a19197b] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-2"
    >
      {/* OFERTA badge */}
      {isInOffersSection && pegamento.oferta && (
        <div className="absolute top-0 left-0 overflow-hidden w-[76px] h-[76px]">
          <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50">
            ¡OFERTA!
          </div>
        </div>
      )}

      {/* Imagen */}
      <div className="w-full aspect-[1/1] relative overflow-hidden rounded">
        <Image
          src={pegamento.imagen || "/placeholder.png"}
          alt={pegamento.nombre}
          fill
          className="object-cover hover:scale-[1.03] transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, 170px"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col items-center w-full text-[12px] sm:text-[11px] text-[#c0b283] font-phudu mt-2 gap-[2px] text-center">
        {/* Nombre del producto */}
        <p className="font-semibold truncate w-full" title={pegamento.nombre}>
          {pegamento.nombre}
        </p>

        {/* Opciones, se muestran solo si existen */}
        {pegamento.opcion_2 && (
          <p className="text-wrap break-words w-full leading-snug">
            {pegamento.opcion_2}
          </p>
        )}
        {pegamento.opcion_3 && (
          <p className="text-wrap break-words w-full leading-snug">
            {pegamento.opcion_3}
          </p>
        )}
        {pegamento.opcion_4 && (
          <p className="text-wrap break-words w-full leading-snug">
            {pegamento.opcion_4}
          </p>
        )}
      </div>
    </article>
  );
};
