"use client";
import { ContextApp, ICeramicos } from "@/context/context";
import { useContext, useState, useEffect } from "react";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";

export const Offers = () => {
  const router = useRouter();
  const { ofertas } = useContext(ContextApp);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ofertas.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(ofertas.length / itemsPerPage);

  const handleDetail = (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  // Mensaje en vivo cuando cambia la página
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    setLiveMessage(`Mostrando página ${currentPage} de ${totalPages}`);
  }, [currentPage, totalPages]);

  return (
    <section
      id="ofertas"
      aria-label="Sección de productos en oferta"
      className="scroll-mt-24 flex flex-col items-center justify-center min-h-[100vh] md:min-h-[90vh] py-4 px-2"
    >
      <div className="flex items-center justify-between w-[90%] z-10">
        <h1
          aria-label="Ofertas mensuales"
          className="text-[2.4rem] font-rancho font-light text-left text-white relative inline-block"
        >
          Ofertas Mensuales
        </h1>

        {/* Paginado */}
        <nav
          aria-label="Paginación de productos en oferta"
          className="flex gap-[2px]"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`p-3 w-5 h-5 rounded-xs text-white transition duration-200 flex justify-center items-center hover:cursor-pointer ${
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
        </nav>
      </div>

      {/* Live region para lectores de pantalla */}
      <div
        aria-live="polite"
        className="sr-only"
      >
        {liveMessage}
      </div>

      {/* Productos en oferta */}
      <section
        aria-label="Lista de productos con descuento"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto h-[34rem] w-full max-w-[70rem] px-4 mt-4  backdrop-blur-sm rounded-md shadow-2xl shadow-[#0000008a]"
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
