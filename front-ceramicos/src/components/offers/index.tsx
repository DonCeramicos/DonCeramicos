"use client";
import { ContextApp } from "@/context/context";
import { useContext, useState, useEffect, useMemo } from "react";
import { Product_Card } from "../Product_Card";
import { Porcelanato_Card } from "../Porcelanato_Card";
import { Pegamento_Card } from "../Pegamentos_Card";
import { useRouter } from "next/navigation";
import { ICeramicos, Iporcelanatos, Ipegamentos } from "@/types";
import { createSlug } from "@/utils/slugs";

type ProductoTipo = "ceramicos" | "porcelanatos" | "pegamentos";

export const Offers = () => {
  const router = useRouter();
  const {
    ceramicosOffers,
    pegamentosOffers,
    porcelanatosOffers,
  } = useContext(ContextApp);

  const [tipoSeleccionado, setTipoSeleccionado] = useState<ProductoTipo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const productosFiltrados = useMemo(() => {
    if (!tipoSeleccionado) return [];
    if (tipoSeleccionado === "ceramicos") return ceramicosOffers;
    if (tipoSeleccionado === "porcelanatos") return porcelanatosOffers;
    return pegamentosOffers;
  }, [tipoSeleccionado, ceramicosOffers, porcelanatosOffers, pegamentosOffers]);

  const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return productosFiltrados.slice(startIndex, startIndex + itemsPerPage);
  }, [productosFiltrados, currentPage, itemsPerPage]);

  const handleDetail = (producto: ICeramicos | Iporcelanatos | Ipegamentos) => {
    const slug = createSlug(producto.nombre, producto.id);
    router.push(`/detalle/${slug}`);
  };

  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    setLiveMessage(`Mostrando página ${currentPage} de ${totalPages}`);
  }, [currentPage, totalPages]);

  return (
    <section
      id="ofertas"
      aria-label="Sección de productos en oferta"
      className="scroll-mt-20 md:scroll-mt-20 flex flex-col items-center justify-start min-h-[100vh] px-2 md:px-6 pt-6"
    >
      <div className="w-full max-w-7xl mb-4">
        <h1 className="text-xl sm:text-2xl font-phudu color-font-3 font-light text-center">
          Ofertas Mensuales
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6 w-auto max-w-7xl z-90 font-phudu bg-custom-4 p-1 rounded ">
        <button
          onClick={() => {
            setTipoSeleccionado("ceramicos");
            setCurrentPage(1);
          }}
          className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
        >
          CERAMICOS
        </button>
        <button
          onClick={() => {
            setTipoSeleccionado("porcelanatos");
            setCurrentPage(1);
          }}
          className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
        >
          PORCELANATOS
        </button>
        <button
          onClick={() => {
            setTipoSeleccionado("pegamentos");
            setCurrentPage(1);
          }}
          className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
        >
          PEGAMENTOS
        </button>
        <button
          onClick={() => {
            setTipoSeleccionado(null);
            setCurrentPage(1);
          }}
          className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-red-500 hover:border-red-500 transition-colors"
        >
          Limpiar filtros
        </button>
      </div>

      {tipoSeleccionado && totalPages > 1 && (
        <nav
          aria-label="Paginación de productos en oferta"
          className="flex overflow-x-auto no-scrollbar whitespace-nowrap items-center gap-[4px] px-2 py-1 mb-4 w-full max-w-7xl z-50"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-btn-paginado hover:bg-stone-500"
            }`}
            aria-label="Página anterior"
          >
            ←
          </button>

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

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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

      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>

      <section
        aria-label="Lista de productos con descuento"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 overflow-y-auto mt-4 max-h-[63vh] md:h-[80vh] w-full max-w-7xl"
      >
        {!tipoSeleccionado ? (
          <p className="col-span-full text-white text-base sm:text-lg text-center mt-10 px-4">
            Seleccioná qué tipo de ofertas querés ver.
          </p>
        ) : currentItems.length === 0 ? (
          <p className="col-span-full text-white text-base sm:text-lg text-center mt-10 px-4">
            No hay productos en oferta disponibles.
          </p>
        ) : (
          currentItems.map((producto) => {
            if (tipoSeleccionado === "ceramicos") {
              return (
                <Product_Card
                  key={producto.id}
                  ceramico={producto as ICeramicos}
                  isInOffersSection
                  onClick={() => handleDetail(producto)}
                />
              );
            }
            if (tipoSeleccionado === "porcelanatos") {
              return (
                <Porcelanato_Card
                  key={producto.id}
                  porcelanato={producto as Iporcelanatos}
                  isInOffersSection
                  onClick={() => handleDetail(producto)}
                />
              );
            }
            return (
              <Pegamento_Card
                key={producto.id}
                pegamento={producto as Ipegamentos}
                isInOffersSection
              />
            );
          })
        )}
      </section>
    </section>
  );
};
