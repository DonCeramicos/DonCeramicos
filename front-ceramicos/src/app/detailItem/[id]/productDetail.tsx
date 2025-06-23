"use client";

import { useState, useEffect, useContext } from "react";
import { ContextApp, Idestacadas, ICeramicos } from "@/context/context";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
 
export default function ProductDetailPage({ id }: { id: string }) {

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [itemDetail, setItemDetail] = useState<ICeramicos | Idestacadas>();
  const { ceramicos, destacadas } = useContext(ContextApp);
  const router = useRouter();

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  useEffect(() => {
    let found;

    if (ceramicos.length > 0) {
      found = ceramicos.find((c) => c.id === id);
    }

    if (!found && destacadas.length > 0) {
      found = destacadas.find((d) => d.id === id);
    }

    setItemDetail(found);
  }, [ceramicos, destacadas, id]);

  if (!itemDetail) {
    return (
      <p aria-label="cargando el detalle del producto" className="text-white">
        Cargando detalle...
      </p>
    );
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <main className="relative bg-custom-2 flex flex-col text-white min-h-screen pt-1 px-2 sm:px-4">
        <span className="sr-only">
          vista detallada del producto seleccionado
        </span>

        <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#000000,transparent)]">
          <div
            className="bg-cover bg-no-repeat bg-left mask-custom"
            style={{ backgroundImage: "url(/background-contact.jpg)" }}
          ></div>
        </div>

        {/* Botón volver */}
        <button
          aria-label="Volver a la seccion anterior"
          className="absolute right-2 bg-[#c0b283] hover:bg-amber-400/35 transition-all duration-300 text-black py-1 px-1 rounded w-20 hover:cursor-pointer"
          onClick={handleBack}
        >
          Volver
        </button>

        {/* Contenedor principal responsive */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
          {/* Miniaturas imagenes */}
          <section className="flex flex-row md:flex-col items-center justify-center h-auto md:h-[60vh] max-h-[200px] md:max-h-none overflow-x-auto md:overflow-y-auto scroll-hidden rounded p-1 gap-1">
            {itemDetail.imagen.map((img, index) => (
              <article key={index} onClick={() => handleImageClick(img)}>
                <img
                  src={img}
                  alt={`Imagen miniatura del producto ${itemDetail.nombre}`}
                  className="h-20 w-20 object-cover hover:cursor-pointer rounded-xs hover:opacity-50 transition duration-500"
                />
              </article>
            ))}
          </section>

          {/* Imagen principal ambiente */}
          <section className="flex items-center justify-center w-full md:w-[30vw] h-[200px] md:h-[73vh] rounded relative">
            <div className="relative w-full h-full rounded">
              <Image
                src={itemDetail.ambiente || "/ambiente-default.jpg"}
                alt="Ambiente de fondo del producto"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded"
              />

              {selectedImage && (
                <Image
                  key={selectedImage} // Esto reinicia la animación al cambiar la imagen
                  src={selectedImage}
                  alt="Vista previa"
                  width={300}
                  height={300}
                  className="object-cover rounded absolute bottom-4 left-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px] shadow-lg border-2 animate-fadeIn"
                />
              )}
            </div>
          </section>

          {/* Detalle del producto */}
          <section className="relative flex flex-col w-full md:w-[30vw] h-auto md:h-[73vh] items-center justify-center rounded overflow-hidden mt-4 md:mt-0">
            <Image
              src={itemDetail.ambiente || "/ambiente-default.jpg"}
              alt="Ambiente"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded absolute z-0"
            />

            <div className="z-10 flex flex-col items-center justify-evenly w-full h-full bg-[#2c2924d4] font-bold font-poiret-one px-4 tracking-wider py-6 gap-4">
              <h1 className="text-xl md:text-2xl text-center uppercase bg-[#46402cd7] rounded p-2">
                {itemDetail.nombre}
              </h1>

              <p className="text-sm md:text-base color-font-2 bg-[#46402cb6] p-2 rounded break-words text-center">
                {itemDetail.descripcion}
              </p>

              {/* Datos del producto en columnas */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 w-full text-center text-sm">
                <article className="flex flex-col gap-1">
                  <p className="uppercase bg-[#46402cd7] rounded">
                    <span className="color-font-2">Dimensiones: </span>
                    {itemDetail.dimensiones}
                  </p>
                  <p className="uppercase bg-[#46402cd7] rounded">
                    <span className="color-font-2">Marca: </span>
                    {itemDetail.marca}
                  </p>
                </article>

                <article className="flex flex-col gap-1">
                  <p className="uppercase bg-[#46402cd7] rounded">
                    <span className="color-font-2">Cantidad: </span>
                    {itemDetail.cantidad}
                  </p>
                  <p className="uppercase bg-[#46402cd7] rounded">
                    <span className="color-font-2">Superficies: </span>
                    {itemDetail.categoria}
                  </p>
                </article>

                {/* Precio y miniaturas */}
                <article className="col-span-2 flex flex-col items-center gap-2 w-full">
                  <p className="uppercase bg-[#46402cd7] p-1 rounded">
                    <span className="color-font-2">Precio: </span>$
                    {itemDetail.valor}
                  </p>
                  <div className="flex gap-2 overflow-x-auto scroll-hidden">
                    {itemDetail.imagen.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="h-12 w-12 rounded hover:opacity-70 transition"
                      />
                    ))}
                  </div>
                </article>

                {/* Botón */}
                <article className="col-span-2 flex justify-center mt-4">
                  <button
                    aria-label="Pedi tu presupuesto"
                    className="bg-amber-50 hover:bg-amber-400/35 text-black font-bold py-2 px-4 rounded hover:cursor-pointer hover:scale-110 transition duration-500"
                    onClick={() => router.push("/#contacto")}
                  >
                    Pedi tu presupuesto
                  </button>
                </article>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
