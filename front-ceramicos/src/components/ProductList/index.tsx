"use client";
import { useState } from "react";
import { useContext } from "react";
import { ContextApp, ICeramicos } from "../../context/context";
import { Product_Card } from "../Product_Card";
import { useRouter } from "next/navigation";

export const ProductList = () => {
  const { ceramicos } = useContext(ContextApp);
  const [searchData, setSearchData] = useState<ICeramicos[]>([]);
  const [categoria, setCategoria] = useState<ICeramicos[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    if (searchTerm === "") {
      setSearchData([]);
      return;
    }

    const filteredData = ceramicos.filter((ceramico) =>
      ceramico.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchData(filteredData);
    setCategoria([]); // Limpiar categoría si se está buscando
  };

  const handleCategoria = (categoriaSeleccionada: string) => {
    const resultado = ceramicos.filter(
      (ceramico) => ceramico.categoria === categoriaSeleccionada
    );
    setCategoria(resultado);
    setSearchData([]); // Limpiar búsqueda si se está filtrando por categoría
  };

  // 🔸 Estado para manejar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ceramicos.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(ceramicos.length / itemsPerPage);

  const router = useRouter();
  const handleDetail = async (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  // 🔍 Lógica para decidir qué productos mostrar
  const productosAMostrar =
    searchData.length > 0
      ? searchData
      : categoria.length > 0
      ? categoria
      : currentItems;

  return (
    <div
      id="catalogo"
      className="scroll-mt-24 flex flex-col justify-center items-center h-[98vh] md:h-[90vh]"
    >
      {/* Encabezado y paginado */}
      <div className="flex items-center justify-between w-[90%]">
        <h1 className="relative inline-block text-[2.4rem] font-rancho font-light text-left mx-8 md:mx-1 text-white group">
          Nuestros Productos
        </h1>

        <div className="flex justify-center items-center z-10 relative gap-[2px]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
          ))}
        </div>
      </div>

      {/* Búsqueda y filtros */}
      <div className="flex items-center justify-evenly border-gray-900/40 bg-custom-4 rounded border-[1px] p-1 m-1 gap-1 w-[50rem] font-phudu ">
        <div>
          <img src="/lupa.png" alt="icono de lupa" className="h-5 w-5" />
    
        </div>
        <input
          className="w-50 h-6 rounded-xs text-[15px] text-white transition duration-200 flex justify-center items-center hover:cursor-pointer border-gray-900/40 border-[1px] p-2 bg-custom-3"
          type="text"
          placeholder="ingresa tu búsqueda"
          onChange={handleSearch}
        />
        <button
          onClick={() => handleCategoria("piso")}
          className="w-20 hover:cursor-pointer border rounded hover:bg-gray-500/20 text-[14px]"
        >
          PISO
        </button>
        <button
          onClick={() => handleCategoria("pared")}
          className="w-20 hover:cursor-pointer border rounded hover:bg-gray-500/20 text-[14px]"
        >
          PARED
        </button>
        <button
          onClick={() => {
            setCategoria([]);
            setSearchData([]);
          }}
          className="w-20 hover:cursor-pointer border rounded hover:bg-gray-500/20 text-[14px]"
        >
          Catálogo
        </button>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-4 overflow-y-auto h-[34rem] w-[70rem] relative py-1 px-4 justify-items-center backdrop-blur-xs border-gray-900/40 border-[1px]">
        {productosAMostrar.map((ceramico: ICeramicos) => (
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
