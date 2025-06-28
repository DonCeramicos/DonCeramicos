"use client";
import { Ipegamentos } from "@/types";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type PegamentoCardProps = {
  pegamento: Ipegamentos;
  onClick?: () => void;
  isInOffersSection?: boolean;
};

export const Pegamento_Card = ({
  pegamento,
  onClick,
  isInOffersSection = false,
}: PegamentoCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <article
      className="relative h-[270px] w-[170px] rounded-lg p-2 bg-[#1a19197b] flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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

      {onClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="p-1 w-10 h-10 rounded flex items-center justify-center relative overflow-hidden transition-colors duration-300"
        >
          <EyeClosed
            className={`w-5 h-5 text-[#000000] absolute transition-all duration-300 ${
              hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          <Eye
            className={`w-5 h-5 text-[#1a1a1a] absolute transition-all duration-300 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </button>
      )}
    </article>
  );
};
