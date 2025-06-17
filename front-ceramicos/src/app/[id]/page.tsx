"use client";
import { useState, useEffect, useContext } from "react";
import { ContextApp, ICeramicos } from "@/context/context";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import WhatsAppFloatingButton from "@/components/whatsApp-Button";

export default function ProductDetailSection({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [itemDetail, setItemDetail] = useState<ICeramicos | undefined>();
  const { ceramicos } = useContext(ContextApp);
  const router = useRouter();

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  useEffect(() => {
    if (ceramicos.length > 0) {
      const found = ceramicos.find((c) => c.id === params.id);
      setItemDetail(found);
    }
  }, [ceramicos, params.id]);

  if (!itemDetail) {
    return <p className="text-white">Cargando detalle...</p>;
  }

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <Navbar />
      <div className="relative bg-custom flex flex-col text-white h-[75.6vh] p-4">
        <button
          className="absolute right-2 bg-amber-500 hover:bg-amber-600 text-white py-1 px-1 rounded w-20 hover:cursor-pointer"
          onClick={handleBack}
        >
          Volver
        </button>
        {/*  seccion para generar 3 filas en forma de columnas */}
        <div className="flex gap-20">
          {/* primer seccion para el array de imagenes */}
          <div
            style={{ backgroundColor: "" }}
            className="flex flex-col items-center justify-center h-[60vh] overflow-y-auto scroll-hidden rounded p-1"
          >
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

          <div className="flex flex-col items-center justify-center h-[72vh] w-[40vw] rounded relative">
            <div className="relative w-full h-full">
              <Image
                src={itemDetail.ambiente || "/ambiente-default.jpg"}
                alt="Ambiente"
                width={500}
                height={500}
                className="object-cover p-1 w-full h-full rounded"
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

          <div className="relative flex flex-col h-[72vh] w-[30vw] items-center justify-center rounded overflow-hidden">
            {/* Fondo desenfocado */}
            <Image
              src={itemDetail.ambiente || "/ambiente-default.jpg"}
              alt="Ambiente"
              width={500}
              height={500}
              className="object-cover p-1 w-full h-full rounded absolute z-0"
            />

            {/* Capa con fondo desenfocado y contenido encima */}
            <div
              style={{ color: "#141414" }}
              className="z-10 backdrop-blur-xs h-full w-full flex flex-col items-center justify-start px-4 py-3  font-extrabold font-poiret-one bg-amber-100/50"
            >
              {/* Título centrado */}
              <h1 className="text-2xl font-bold mb-4 text-center">
                {itemDetail.nombre}
              </h1>

              {/* Datos en dos columnas */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-6 w-full text-sm">
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Dimensiones:</span>{" "}
                    {itemDetail.dimensiones}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-semibold">Cantidad por caja:</span>{" "}
                    {itemDetail.cantidad}
                  </p>
                </div>
                {/*  miniaturas de imagenes */}
                <div
                  style={{ backgroundColor: "" }}
                  className="flex gap-2 items-center justify-between h-full w-96 overflow-y-auto scroll-hidden rounded p-1"
                >
                  <p>
                    <span className="font-semibold">Precio:</span> $
                    {itemDetail.valor}
                  </p>
                  <div className="flex gap-2">
                  {itemDetail.imagen.map((imagen, index) => (
                    <div>
                      <img
                        key={index}
                        src={imagen}
                        alt={`Imagen ${index + 1}`}
                        className="mb-1 h-15 w-15 hover:cursor-pointer rounded-xs "
                      />
                    </div>
                  ))}
                  </div>
                </div>
                <button className="bg-amber-50 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded absolute bottom-60 hover:cursor-pointer hover:scale-110 transition duration-500"
                onClick={() => router.push('/#contacto')}>
                    Pedi tu presupuesto
                </button>
                <WhatsAppFloatingButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
