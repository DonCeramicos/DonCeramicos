"use client";
import { SEO } from "../SEO";
import { useState, useContext } from "react";
import { ContextApp } from "../../context/context";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";
import { ICeramicos, Ipegamentos, Iporcelanatos } from "@/types";
import { Porcelanato_Card } from "../Porcelanato_Card";
import { Pegamento_Card } from "../Pegamentos_Card";

type ProductoTipo = "ceramicos" | "porcelanatos" | "pegamentos";

export const ProductList = () => {
  const { ceramicos, porcelanatos, pegamentos } = useContext(ContextApp);
  const [tipoSeleccionado, setTipoSeleccionado] = useState<ProductoTipo | null>(
    null
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState<
    ICeramicos[] | Iporcelanatos[] | Ipegamentos[]
  >([]);
  const [categoria, setCategoria] = useState<ICeramicos[]>([]); // solo para cerámicos

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

    const data =
      tipoSeleccionado === "ceramicos"
        ? ceramicos
        : tipoSeleccionado === "porcelanatos"
        ? porcelanatos
        : pegamentos;

    const filtered = data.filter((item) =>
      item.nombre.toLowerCase().includes(term.toLowerCase())
    ) as ICeramicos[] | Iporcelanatos[] | Ipegamentos[];

    setSearchData(filtered);
    setCategoria([]);
  };

  const handleCategoria = (cat: string) => {
    if (tipoSeleccionado !== "ceramicos") return;

    const filtrados = ceramicos.filter((c) => c.categoria === cat);
    setCategoria(filtrados);
    setSearchData([]);
    setCurrentPage(1);
  };

  // Lógica para cerámicos (con paginado)
  const getBaseList = () => {
    if (tipoSeleccionado === "ceramicos") {
      return ceramicos.filter((c) => !c.oferta);
    }
    if (tipoSeleccionado === "porcelanatos") {
      return porcelanatos.filter((p) => !p.oferta);
    }
    return pegamentos.filter((p) => !p.oferta);
  };

  
  const paginados =
    searchData.length > 0 || categoria.length > 0 ? [] : getBaseList();

  const totalPages = Math.ceil(paginados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = paginados.slice(startIndex, startIndex + itemsPerPage);

  const productosSinPaginado =
    searchData.length > 0 ? searchData : categoria.length > 0 ? categoria : [];

  const productosAMostrar =
    productosSinPaginado.length > 0 ? productosSinPaginado : currentItems;

  const renderFiltrosCategoria = () => {
    if (tipoSeleccionado !== "ceramicos") return null;
    return (
      <div className="flex flex-wrap gap-2 w-full font-phudu">
        <button
          onClick={() => handleCategoria("piso")}
          className="border rounded px-2 py-1 text-sm"
        >
          PISO
        </button>
        <button
          onClick={() => handleCategoria("pared")}
          className="border rounded px-2 py-1 text-sm"
        >
          PARED
        </button>
        <button
          onClick={() => {
            setCategoria([]);
            setSearchData([]);
            setCurrentPage(1);
          }}
          className="border rounded px-2 py-1 text-sm"
        >
          Catálogo
        </button>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Catálogo | Don Cerámicos"
        description="Explorá nuestros productos."
        canonicalUrl="https://donceramicos.com/catalogo"
        ogImage="/favicon/og-catalogo.jpg"
      />

      <section
        id="catalogo"
        className="flex flex-col items-center min-h-screen px-2 scroll-mt-16 md:scroll-mt-20 "
      >
        {/* Header + paginado */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-4 mb-2">
          <h1 className="text-[1.5rem] font-phudu color-font-3 font-light">
            Nuestros Productos
          </h1>

          {searchData.length === 0 &&
            categoria.length === 0 &&
            totalPages > 1 && (
              <div className="flex overflow-x-auto gap-1">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-6 h-6 text-sm bg-btn-paginado"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-6 h-6 text-sm ${
                        page === currentPage
                          ? "bg-btn-paginado-selected"
                          : "bg-btn-paginado"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-6 h-6 text-sm bg-btn-paginado"
                >
                  →
                </button>
              </div>
            )}
        </div>

        {/* Selector de tipo de producto */}
        <div className="flex gap-2 mb-4 font-phudu text-white">

<button
  onClick={() => {
    setTipoSeleccionado("ceramicos");
    setSearchTerm("");
    setSearchData([]);
    setCategoria([]);
    setCurrentPage(1);
  }}
  className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
>
  Cerámicos
</button>

<button
  onClick={() => {
    setTipoSeleccionado("porcelanatos");
    setSearchTerm("");
    setSearchData([]);
    setCategoria([]);
    setCurrentPage(1);
  }}
  className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
>
  Porcelanatos
</button>

<button
  onClick={() => {
    setTipoSeleccionado("pegamentos");
    setSearchTerm("");
    setSearchData([]);
    setCategoria([]);
    setCurrentPage(1);
  }}
  className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-white hover:text-black transition-colors"
>
  Pegamentos
</button>

<button
  onClick={() => {
    setTipoSeleccionado(null);
    setSearchTerm("");
    setSearchData([]);
    setCategoria([]);
    setCurrentPage(1);
  }}
  className="border border-white rounded-md px-4 py-[6px] text-sm text-white hover:bg-red-500 hover:border-red-500 transition-colors"
>
  Limpiar
</button>

        </div>

        {/* Búsqueda y filtros */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl bg-custom-4 p-4 rounded">
          <input
            className="w-full md:w-[250px] h-8 rounded-xs text-white p-2 bg-custom-3"
            type="text"
            placeholder="Buscar producto"
            onChange={handleSearch}
            value={searchTerm}
          />
          {renderFiltrosCategoria()}
        </div>

        {/* Productos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 overflow-y-auto mt-4 max-h-[63vh] md:h-[80vh] w-full max-w-7xl px-2 md:px-6">
          {searchTerm && searchData.length === 0 ? (
            <p className="col-span-full text-white text-lg text-center mt-10 px-4">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          ) : !tipoSeleccionado ? (
            <p className="col-span-full text-white text-lg text-center mt-10 px-4">
              Seleccioná qué tipo de productos querés ver.
            </p>
          ) : productosAMostrar.length === 0 ? (
            <p className="col-span-full text-white text-lg text-center mt-10 px-4">
              No hay productos disponibles en esta categoría.
            </p>
          ) : (
            productosAMostrar.map((producto) => {
              if (tipoSeleccionado === "ceramicos") {
                return (
                  <Product_Card
                    key={producto.id}
                    ceramico={producto as ICeramicos}
                    onClick={() => handleDetail(producto.id)}
                  />
                );
              }

              if (tipoSeleccionado === "porcelanatos") {
                return (
                  <Porcelanato_Card
                    key={producto.id}
                    porcelanato={producto as Iporcelanatos}
                    onClick={() => handleDetail(producto.id)}
                  />
                );
              }

              return (
                <Pegamento_Card
                  key={producto.id}
                  pegamento={producto as Ipegamentos}
                  onClick={() => handleDetail(producto.id)}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};
