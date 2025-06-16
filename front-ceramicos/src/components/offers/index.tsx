"use client";
import { ContextApp, ICeramicos } from "@/context/context";
import { useContext, useState } from "react";
import { Product_Card } from "../Product_Card";

export const Offers = () => {
  const { ofertas } = useContext(ContextApp);

    // 🔸 Estado para manejar la página actual
    const [currentPage, setCurrentPage] = useState(1);
  
    // 🔸 Cantidad de productos por página
    const itemsPerPage = 1;
  
    // 🔸 Índice de inicio de los productos a mostrar
    const startIndex = (currentPage - 1) * itemsPerPage;
  
    // 🔸 Obtener productos de la página actual
    const currentItems = ofertas.slice(startIndex, startIndex + itemsPerPage);
  
    // 🔸 Calcular el total de páginas
    const totalPages = Math.ceil(ofertas.length / itemsPerPage);

  return (
    <div
      id="ofertas"
      className="flex flex-col flex-wrap justify-center items-center h-[97vh] md:h-[91vh] scroll-mt-16 bg-custom"
    >
      <div className="flex items-center justify-between w-[90%]">
        <h1
          style={{ color: "#bababa" }}
          className=" font-rancho font-light text-left mx-8 md:mx-1 text-[2.4rem]  top-[-2rem]"
        >
          Ofertas de la semana
        </h1>
        {/* Paginado */}
        <div className="flex justify-center items-center   z-10 relative gap-[2px]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-5 h-5 rounded-xs text-white transition duration-200 flex justify-center items-center hover:cursor-pointer ${
                page === currentPage
                  ? "bg-amber-500 shadow-lg scale-105"
                  : "bg-stone-400 hover:bg-stone-500"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-[90%] h-[90%] p-1">
        {/* Fondo dividido en 4 cuadrantes */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0  gap-1 p-30 border  rounded bg-[#0f0f0f]">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tl-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tr-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-bl-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-br-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
        </div>
        <div className="grid gap-2 overflow-y-auto h-full z-10 relative pr-2">
          {ofertas.map((ceramico: ICeramicos) => (
            <Product_Card
              ceramico={ceramico}
              key={ceramico.id}
              isInOffersSection
            />
          ))}
        </div>
      </div>
    </div>
  );
};
