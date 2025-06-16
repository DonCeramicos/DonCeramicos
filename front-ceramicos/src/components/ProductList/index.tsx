"use client";
import { useState } from "react";
import { useContext } from "react";
import { ContextApp, ICeramicos } from "../../context/context";
import { Product_Card } from "../Product_Card";

export const ProductList = () => {
  const { ceramicos } = useContext(ContextApp);

  // 🔸 Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // 🔸 Cantidad de productos por página
  const itemsPerPage = 1;

  // 🔸 Índice de inicio de los productos a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;

  // 🔸 Obtener productos de la página actual
  const currentItems = ceramicos.slice(startIndex, startIndex + itemsPerPage);

  // 🔸 Calcular el total de páginas
  const totalPages = Math.ceil(ceramicos.length / itemsPerPage);

  return (
    <div
      id="catalogo"
      className="flex flex-col justify-center items-center h-[97vh] md:h-[91vh] scroll-mt-16 bg-custom"
    >
      <div className="flex items-center justify-between w-[90%]">
        <h1
          style={{ color: "#bababa" }}
          className=" font-rancho font-light text-left mx-8 md:mx-1 text-[2.4rem]  top-[-2rem]"
        >
          Nuestros Productos
        </h1>
        {/* Paginado */}
        <div className="flex justify-center items-center z-10 relative gap-[2px]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`p-3 w-5 h-5 rounded-xs text-white transition duration-200 flex justify-center items-center hover:cursor-pointer ${
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
        {/* Fondo dividido */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0 gap-1">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tl-lg"
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tr-lg"
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-bl-lg"
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-br-lg"
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
        </div>

        {/* Productos */}
        <div className="grid gap-2 overflow-y-auto h-[99%] z-10 relative pr-2">
          {currentItems.map((ceramico: ICeramicos) => (
            <Product_Card ceramico={ceramico} key={ceramico.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
