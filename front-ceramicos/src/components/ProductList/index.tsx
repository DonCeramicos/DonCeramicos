"use client";
import { useState } from "react";
import { useContext } from "react";
import { ContextApp, ICeramicos } from "../../context/context";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";

export const ProductList = () => {
  const { ceramicos } = useContext(ContextApp);

  // 🔸 Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // 🔸 Cantidad de productos por página
  const itemsPerPage = 6;

  // 🔸 Índice de inicio de los productos a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;

  // 🔸 Obtener productos de la página actual
  const currentItems = ceramicos.slice(startIndex, startIndex + itemsPerPage);

  // 🔸 Calcular el total de páginas
  const totalPages = Math.ceil(ceramicos.length / itemsPerPage);

  const router = useRouter();
  const handleDetail = async (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  return (
    <div
      id="catalogo"
      className="scroll-mt-24 flex flex-col justify-center items-center h-[97vh] md:h-[90vh]  "
    >
      <div className="flex items-center justify-between w-[90%] ">
  <h1 className="relative inline-block text-[2.4rem] font-rancho font-light text-left mx-8 md:mx-1 text-white group">
  Nuestros Productos
  <span className="block h-[3px] w-0 bg-[#c0b283] rounded-full transition-all duration-500 group-hover:w-full"></span>
</h1>

        {/* Paginado */}
        <div className="flex justify-center items-center z-10 relative gap-[2px]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`p-3 w-5 h-5 rounded-xs text-white transition duration-200 flex justify-center items-center hover:cursor-pointer ${
                page === currentPage
                  ? "bg-btn-paginado-selected shadow-lg color-font scale-105"
                  : "bg-btn-paginado hover:bg-stone-500"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
     


        {/* Productos */}
        <div className="grid grid-cols-4 overflow-y-auto h-[99%] w-[80%] relative py-1 px-4 justify-items-center  backdrop-blur-xs border ">
          {currentItems.map((ceramico: ICeramicos) => (
            <Product_Card
              ceramico={ceramico}
              key={ceramico.id}
              onClick={() => handleDetail(ceramico.id)}
            />
          ))}
        </div>
      </div>
  );
};
