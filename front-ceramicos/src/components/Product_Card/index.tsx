import { ICeramicos } from "@/context/context";
import Image from "next/image";

type ProductCardProps = {
  ceramico: ICeramicos;
  isInOffersSection?: boolean; // ← nueva prop opcional
};

export const Product_Card = ({ ceramico, isInOffersSection = false }: ProductCardProps) => {
  return (
    <div className="relative h-60 w-40 bg-fuchsia-950 border" key={ceramico.id}>
      {/* Badge de oferta */}
{isInOffersSection && ceramico.oferta && (
  <div className="absolute top-0 left-0 overflow-hidden w-[75px] h-[75px]">
    <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px]">
      ¡OFERTA!
    </div>
  </div>
)}


      <Image
        src={ceramico.imagen}
        alt={ceramico.nombre}
        width={100}
        height={100}
        className="object-cover mx-auto"
      />
      <div className="p-2">
        <p className="font-bold text-amber-50">Nombre: {ceramico.nombre}</p>
        <p className="font-bold text-amber-50">Valor: ${ceramico.valor}</p>
        <p className="font-bold text-amber-50">{ceramico.dimensiones}</p>
      </div>
    </div>
  );
};
