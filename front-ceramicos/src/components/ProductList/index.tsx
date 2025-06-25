"use client";
import { SEO } from "../SEO";
import { useState, useContext } from "react";
import { ContextApp, ICeramicos } from "../../context/context";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";

export const ProductList = () => {
  const { ceramicos } = useContext(ContextApp);
  const [searchData, setSearchData] = useState<ICeramicos[]>([]);
  const [categoria, setCategoria] = useState<ICeramicos[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;

  const router = useRouter();
  const handleDetail = (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setCurrentPage(1);

    if (!term.trim()) {
      setSearchData([]);
      return;
    }

    const filtered = ceramicos.filter((ceramico) =>
      ceramico.nombre.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filtered);
    setCategoria([]);
  };

  const handleCategoria = (categoriaSeleccionada: string) => {
    const filtrados = ceramicos.filter(
      (c) => c.categoria === categoriaSeleccionada
    );
    setCategoria(filtrados);
    setSearchData([]);
    setCurrentPage(1);
  };

  const paginados = categoria.length || searchData.length ? [] : ceramicos;
  const totalPages = Math.ceil(paginados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = paginados.slice(startIndex, startIndex + itemsPerPage);

  const productosSinPaginado =
    searchData.length > 0 ? searchData : categoria.length > 0 ? categoria : [];

  const productosAMostrar =
    productosSinPaginado.length > 0 ? productosSinPaginado : currentItems;

  return (
    <>
      <SEO
        title="Catálogo de Cerámicos | Don Cerámicos"
        description="Explorá todos nuestros cerámicos para pisos y paredes. Estilos modernos, clásicos y rústicos para cada ambiente."
        canonicalUrl="https://donceramicos.com/catalogo"
        ogImage="/favicon/og-catalogo.jpg"
      />

      <section
        aria-label="Sección de productos"
        id="catalogo"
        className="scroll-mt-[8rem] md:scroll-mt-20 flex flex-col justify-start items-center  h-auto min-h-screen px-2 "
      >
        {/* Header + paginado */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-4 mb-2">
          <h1 className="text-[1.5rem] font-phudu color-font-3 font-light">
            Nuestros Productos
          </h1>

          {searchData.length === 0 &&
            categoria.length === 0 &&
            totalPages > 1 && (
              <div
                aria-label="Paginado"
                className="flex overflow-x-auto no-scrollbar whitespace-nowrap items-center gap-[4px] px-2 py-1 max-w-full"
              >
                {/* Botón Anterior */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center hover:cursor-pointer ${
                    currentPage === 1
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-btn-paginado hover:bg-stone-500"
                  }`}
                >
                  ←
                </button>

                {/* Botones de páginas */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center ${
                        page === currentPage
                          ? "bg-btn-paginado-selected shadow-lg color-font scale-105"
                          : "bg-btn-paginado hover:bg-stone-500"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                {/* Botón Siguiente */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`p-2 w-6 h-6 rounded-xs text-white text-sm flex items-center justify-center hover:cursor-pointer ${
                    currentPage === totalPages
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-btn-paginado hover:bg-stone-500"
                  }`}
                >
                  →
                </button>
              </div>
            )}
        </div>

        {/* Búsqueda y filtros */}
        <div
          aria-label="Búsqueda y filtros"
          className="flex flex-wrap items-center justify-center border border-gray-900/40 bg-custom-4 rounded p-2 gap-2 w-full max-w-5xl font-phudu"
        >
          <div className="flex items-center gap-2 w-full md:w-auto">
            <img src="/lupa.png" alt="icono de lupa" className="h-5 w-5" />
            <input
              aria-label="Buscar producto por nombre"
              className="w-full md:w-[250px] h-8 rounded-xs text-[15px] text-white border border-gray-900/40 p-2 bg-custom-3"
              type="text"
              placeholder="Buscar producto"
              onChange={handleSearch}
            />
          </div>

          {/* Botones filtrado */}
          <div className="flex flex-row flex-wrap gap-2 w-full">
            <button
              aria-label="Filtrar por piso"
              onClick={() => handleCategoria("piso")}
              className="flex-1 border rounded hover:bg-gray-500/20 text-[14px] px-2 py-1"
            >
              PISO
            </button>
            <button
              aria-label="Filtrar por pared"
              onClick={() => handleCategoria("pared")}
              className="flex-1 border rounded hover:bg-gray-500/20 text-[14px] px-2 py-1"
            >
              PARED
            </button>
            <button
              aria-label="Mostrar todo el catálogo"
              onClick={() => {
                setCategoria([]);
                setSearchData([]);
                setCurrentPage(1);
              }}
              className="flex-1 border rounded hover:bg-gray-500/20 text-[14px] px-2 py-1"
            >
              Catálogo
            </button>
          </div>
        </div>

        {/* Productos */}
        <div
          aria-label="Listado de productos"
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 scrollbar  overflow-y-auto mt-4 max-h-[63vh] md:h-[80vh] w-full max-w-7xl px-2 md:px-6 md:items-start md:justify-center "
        >
          {searchTerm && searchData.length === 0 ? (
            <p className="col-span-full text-white font-phudu text-lg text-center mt-10">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          ) : productosAMostrar.length === 0 && categoria.length > 0 ? (
            <p className="col-span-full text-white font-phudu text-lg text-center mt-10">
              No hay productos disponibles en esta categoría.
            </p>
          ) : (
            productosAMostrar.map((ceramico) => (
              <Product_Card
                key={ceramico.id}
                ceramico={ceramico}
                onClick={() => handleDetail(ceramico.id)}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};
