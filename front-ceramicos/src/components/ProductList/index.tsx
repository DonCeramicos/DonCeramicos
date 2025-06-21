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
    const itemsPerPage = 6;

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
          className="scroll-mt-24 flex flex-col justify-center items-center h-[98vh] md:h-[90vh]"
        >
          {/* Header + paginado */}
          <div className="flex items-center justify-between w-[90%]">
            <h1 className="relative inline-block text-[2.4rem] font-rancho font-light text-left mx-8 md:mx-1 text-white group">
              Nuestros Productos
            </h1>

            {/* Paginado solo si no hay búsqueda ni categoría */}
            {searchData.length === 0 && categoria.length === 0 && (
              <div
                aria-label="Paginado"
                className="flex justify-center items-center z-10 relative gap-[2px]"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`p-2 w-5 h-5 rounded-xs text-white transition duration-200 flex justify-center items-center hover:cursor-pointer ${
                        page === currentPage
                          ? "bg-btn-paginado-selected shadow-lg color-font scale-105"
                          : "bg-btn-paginado hover:bg-stone-500"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Búsqueda y filtros */}
          <div
            aria-label="Búsqueda y filtros"
            className="flex items-center justify-evenly border-gray-900/40 bg-custom-4 rounded border-[1px] p-1 m-1 gap-1 w-[50rem] font-phudu"
          >
            <img src="/lupa.png" alt="icono de lupa" className="h-5 w-5" />

            <input
              aria-label="Buscar producto por nombre"
              className="w-50 h-6 rounded-xs text-[15px] text-white transition duration-200 flex justify-center items-center border-gray-900/40 border-[1px] p-2 bg-custom-3"
              type="text"
              placeholder="ingresa tu búsqueda"
              onChange={handleSearch}
            />

            <button
              aria-label="Filtrar por piso"
              onClick={() => handleCategoria("piso")}
              className="w-20 border rounded hover:bg-gray-500/20 text-[14px]"
            >
              PISO
            </button>
            <button
              aria-label="Filtrar por pared"
              onClick={() => handleCategoria("pared")}
              className="w-20 border rounded hover:bg-gray-500/20 text-[14px]"
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
              className="w-20 border rounded hover:bg-gray-500/20 text-[14px]"
            >
              Catálogo
            </button>
          </div>

          {/* Productos */}
          <div
            aria-label="Listado de productos"
            className="grid grid-cols-4 overflow-y-auto h-[32rem] w-[70rem] relative py-1 px-4 justify-items-center backdrop-blur-xs shadow-2xl shadow-[#0000008a]"
          >
            {searchTerm && searchData.length === 0 ? (
              <p className="col-span-4 text-white font-phudu text-lg text-center mt-10 z-50">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
            ) : productosAMostrar.length === 0 && categoria.length > 0 ? (
              <p className="col-span-4 text-white font-phudu text-lg text-center mt-10 z-50">
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
