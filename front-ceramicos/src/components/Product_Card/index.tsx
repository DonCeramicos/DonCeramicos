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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <article
      className="relative h-[270px] w-[170px] rounded-lg p-2 bg-[#3e3e3ed1] flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      aria-label={`Producto: ${ceramico.nombre}, precio $${ceramico.valor}`}
    >
      {/* Badge de oferta */}
      {isInOffersSection && ceramico.oferta && (
        <div className="absolute top-[-1px] left-[-1px] overflow-hidden w-[76px] h-[76px]">
          <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50 hover:scale-[1.01] transition duration-300">
            <span className="sr-only">producto en oferta</span>
            ¡OFERTA!
          </div>
        </div>
      )}

      {/* Imagen */}
      <Image
        src={ceramico.imagen?.[2] || "/placeholder.png"}
        alt={`Imagen en miniatura del producto: ${ceramico.nombre}`}
        width={500}
        height={500}
        className="object-cover rounded h-[180px] w-full hover:scale-[1.03] transition-transform duration-300"
        loading="lazy"
      />

      {/* Detalles */}
      <div className="p-1 flex flex-col items-start text-[13px] w-full text-[#c0b283] font-phudu mt-2 tracking-wide">
        <p className="color-font-2">{ceramico.nombre}</p>
        <p className="text-sm">${ceramico.valor}</p>
      </div>

      {/* Botón ícono de ojo */}
      {onClick && (
        <button
          aria-label={`Ver detalles del producto ${ceramico.nombre}`}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="absolute bottom-1 bg-[#c0b283] p-1 rounded transition duration-300 hover:cursor-pointer hover:bg-[#837e6c]"
        >
          {/* Ícono SVG del ojo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#1a1a1a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      )}
    </article>
  );
};
