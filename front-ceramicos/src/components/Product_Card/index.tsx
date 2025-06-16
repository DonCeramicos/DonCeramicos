import { ICeramicos } from "@/context/context";
import Image from "next/image";

type ProductCardProps = {
  ceramico: ICeramicos;
  isInOffersSection?: boolean; // ← nueva prop opcional
};

export const Product_Card = ({ ceramico, isInOffersSection = false }: ProductCardProps) => {
  return (
    <div className="relative h-[350px] w-[240.825px]  rounded p-1 bg-data-card border-amber-50 flex flex-col items-center " key={ceramico.id}>
      {/* Badge de oferta */}
{isInOffersSection && ceramico.oferta && (
  <div className="absolute top-[-1] left-[-1] overflow-hidden w-[76px] h-[76px]">
    <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50 hover:scale-101 transition duration-300 ">
      ¡OFERTA!
    </div>
  </div>
)}


      <Image
        src={ceramico.imagen[0]}
        alt={ceramico.nombre}
        width={500}
        height={500}
        className="object-cover h-[230px] w-[300px] rounded hover:scale-101 transition-all duration-100 "
      />
      <div className="p-1 flex flex-col items-right rounded text-[13px] w-full text-amber-50">
        <p className="font-phudu ">{ceramico.nombre}</p>
        <p className="font-phudu ">${ceramico.valor}</p>
        <p className="font-phudu">DIMENSIONES: {ceramico.dimensiones}</p>
        <p className="font-phudu ">CANTIDAD POR CAJA: {ceramico.cantidad}</p>
      </div>
      <button className="absolute bottom-1 text-[16px] font-rancho tracking-widest ver-hover bn19">ver</button>
    </div>
  );
};
