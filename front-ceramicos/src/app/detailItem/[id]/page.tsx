"use client";
import { useState, useEffect, useContext } from "react";
import { ContextApp, ICeramicos, Idestacadas } from "@/context/context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();

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
    return <p className="text-white">Cargando detalle...</p>;
  }

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="relative bg-custom-2 flex flex-col text-white h-[76.8vh] p-4">
      <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#000000,transparent)]">
        <div
          className="bg-cover bg-no-repeat  bg-left  mask-custom"
          style={{ backgroundImage: "url(/background-contact.jpg)" }}
        ></div>
      </div>
      <button
        className="absolute right-2 bg-[#c0b283]  hover:bg-amber-400/35 transition-all duration-300 text-white py-1 px-1 rounded w-20 hover:cursor-pointer"
        onClick={handleBack}
      >
        Volver
      </button>
      {/*  seccion para generar 3 filas en forma de columnas */}
      <div className="flex justify-evenly">
        {/* primer seccion para el array de imagenes */}
        <div className="flex flex-col items-center justify-center h-[60vh] overflow-y-auto scroll-hidden rounded p-1">
          {itemDetail.imagen.map((imagen, index) => (
            <div onClick={() => handleImageClick(imagen)}>
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                className="mb-1 h-30 w-30 hover:cursor-pointer rounded-xs hover:opacity-50 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
        {/*  seccion para la foto del interior */}

        <div className="flex items-center justify-center h-[73vh] w-[30vw] rounded relative">
          <div className="relative h-[73vh] w-[30vw] rounded">
            <Image
              src={itemDetail.ambiente || "/ambiente-default.jpg"}
              alt="Ambiente"
              width={500}
              height={500}
              className="object-cover  w-full h-full rounded"
            />

            {selectedImage && (
              <Image
                key={selectedImage} // sin esto la animacion de entrada no se reinicia. No tocar
                src={selectedImage}
                alt="Vista previa"
                width={300}
                height={300}
                className="object-cover rounded absolute bottom-8 left-8 w-[150px] h-[150px] shadow-lg border-2 transition-all duration-500 ease-in-out opacity-0 scale-95 animate-fadeIn"
              />
            )}
          </div>
        </div>

        {/* seccion para los datos del producto con la foto de ambiente con blur */}

        <div className="relative flex flex-col h-[73vh] w-[30vw] items-center justify-center rounded overflow-hidden">
          {/* Fondo desenfocado */}
          <Image
            src={itemDetail.ambiente || "/ambiente-default.jpg"}
            alt="Ambiente"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded absolute z-0"
          />

          {/* Capa con fondo desenfocado y contenido encima */}
          <div className="z-10 flex flex-col items-center justify-evenly w-full h-full bg-[#2c2924d4] font-bold font-poiret-one px-4 tracking-wider">
            {/* Título centrado */}
            <h1 className="text-2xl  mb-4 text-center uppercase bg-[#46402cd7] rounded p-1 ">
              {itemDetail.nombre}
            </h1>
            <p className="mb-4 color-font-2 bg-[#46402cb6] p-2 rounded">{itemDetail.descripcion}</p>

            {/* Datos centrados en dos columnas */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 max-w-[500px] w-full text-center text-sm ">
              <div className="flex flex-col gap-1">
                <p className="uppercase bg-[#46402cd7] rounded">
                  <span className="color-font-2">DIMENSIONES: </span>
                  {itemDetail.dimensiones}
                </p>
                <p className="uppercase bg-[#46402cd7] rounded">
                  <span className="color-font-2 uppercase">MARCA: </span>
                  {itemDetail.marca}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="uppercase bg-[#46402cd7] rounded">
                  <span className="color-font-2">CANTIDAD: </span>
                  {itemDetail.cantidad}
                </p>

                <p className="uppercase bg-[#46402cd7] rounded">
                  <span className="color-font-2"> SUPERFICIES: </span>
                  {itemDetail.categoria}
                </p>
              </div>

              <div className="col-span-2 flex flex-col items-center gap-2 w-full ">
                <p className="uppercase bg-[#46402cd7] p-1 rounded ">
                  <span className="color-font-2">PRECIO:</span> $
                  {itemDetail.valor}
                </p>
                <div className="flex gap-2 overflow-x-auto scroll-hidden">
                  {itemDetail.imagen.map((imagen, index) => (
                    <img
                      key={index}
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      className="h-12 w-12 rounded hover:opacity-70 transition"
                    />
                  ))}
                </div>
              </div>

              <div className="col-span-2 flex justify-center mt-4">
                <button
                  className="bg-amber-50 hover:bg-amber-400/35 text-black font-bold py-2 px-4 rounded hover:cursor-pointer hover:scale-110 transition duration-500"
                  onClick={() => router.push("/#contacto")}
                >
                  Pedi tu presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
