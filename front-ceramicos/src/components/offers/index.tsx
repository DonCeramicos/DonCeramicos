"use client";
import { ContextApp, ICeramicos } from "@/context/context";
import { useContext, useState, useEffect } from "react";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";

export const Offers = () => {
  const router = useRouter();
  const { ofertas } = useContext(ContextApp);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ofertas.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(ofertas.length / itemsPerPage);

  const handleDetail = (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    setLiveMessage(`Mostrando página ${currentPage} de ${totalPages}`);
  }, [currentPage, totalPages]);

  return (
    <section
      id="ofertas"
      aria-label="Sección de productos en oferta"
      className="scroll-mt-16 md:scroll-mt-20 flex flex-col items-center justify-start min-h-[100vh] px-2 md:pt-6 "
    >
      {/* Título y paginado */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full max-w-7xl gap-4 mb-2">
        <h1
          aria-label="Ofertas mensuales"
          className="text-[1.5rem] font-phudu color-font-3 font-light"
        >
          Ofertas Mensuales
        </h1>

{totalPages > 1 && (
  <nav
    aria-label="Paginación de productos en oferta"
    className="flex overflow-x-auto no-scrollbar whitespace-nowrap items-center gap-[4px] px-2 py-1 max-w-full"
  >
    {/* Botón Anterior */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center hover:cursor-pointer ${
        currentPage === 1
          ? "bg-gray-700 cursor-not-allowed"
          : "bg-btn-paginado hover:bg-stone-500"
      }`}
      aria-label="Página anterior"
    >
      ←
    </button>

    {/* Botones de páginas */}
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center ${
          page === currentPage
            ? "bg-btn-paginado-selected shadow-lg color-font scale-105"
            : "bg-btn-paginado hover:bg-stone-500"
        }`}
        aria-current={page === currentPage ? "page" : undefined}
        aria-label={`Ir a la página ${page}`}
      >
        {page}
      </button>
    ))}

    {/* Botón Siguiente */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center ${
        currentPage === totalPages
          ? "bg-gray-700 cursor-not-allowed"
          : "bg-btn-paginado hover:bg-stone-500"
      }`}
      aria-label="Página siguiente"
    >
      →
    </button>
  </nav>
)}

      </div>

      {/* Lectores de pantalla */}
      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>

      {/* Lista de productos en oferta */}
      <section
        aria-label="Lista de productos con descuento"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 overflow-y-auto mt-4 max-h-[63vh] md:h-[80vh] w-full max-w-7xl px-2 md:px-6 md:items-start md:justify-center"
      >
        {currentItems.map((ceramico: ICeramicos) => (
          <Product_Card
            key={ceramico.id}
            ceramico={ceramico}
            isInOffersSection
            onClick={() => handleDetail(ceramico.id)}
          />
        ))}
      </section>
    </section>
  );
};
