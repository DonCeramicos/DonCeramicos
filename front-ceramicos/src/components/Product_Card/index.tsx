"use client";
import { ICeramicos } from "@/context/context";
import Image from "next/image";

type ProductCardProps = {
  ceramico: ICeramicos;
  isInOffersSection?: boolean;
  onClick?: () => void;
};

export const Product_Card = ({
  ceramico,
  isInOffersSection = false,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      className="relative h-[270px] w-[170px] rounded-lg p-2 bg-[#3e3e3ed1] flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
      key={ceramico.id}
    >
      {/* Badge de oferta */}
      {isInOffersSection && ceramico.oferta && (
        <div className="absolute top-[-1px] left-[-1px] overflow-hidden w-[76px] h-[76px]">
          <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50 hover:scale-101 transition duration-300">
            ¡OFERTA!
          </div>
        </div>
      )}

      {/* Imagen */}
      <Image
        src={ceramico.imagen[2]}
        alt={ceramico.nombre}
        width={500}
        height={500}
        className="object-cover rounded h-[180px] w-full hover:scale-105 transition-all duration-300"
      />

      {/* Detalles */}
      <div className="p-1 flex flex-col items-start text-[13px] w-full text-[#c0b283] font-phudu mt-2  tracking-wide">
        <p className="color-font-2">{ceramico.nombre}</p>
        <p className="text-sm">${ceramico.valor}</p>

      </div>

      {/* Botón */}
      <button
        onClick={onClick}
        className="absolute bottom-1 text-xl font-rancho tracking-widest text-[#1a1a1a] bg-[#c0b283] px-1  rounded hover:bg-[#d8bb91] transition duration-300 hover:cursor-pointer"
      >
        ver
      </button>
    </div>
  );
};
