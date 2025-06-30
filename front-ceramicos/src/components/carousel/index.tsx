"use client";
import { useContext } from "react";
import { ContextApp } from "../../context/context";
import Image from "next/image";
import Loader from "../customLoader";
import { Idestacadas } from "@/types";

export const Carousel = () => {
  const { destacadas } = useContext(ContextApp);

  const handleDetail = (producto: Idestacadas) => {
    const mensaje = `Hola! Quiero hacer una consulta sobre este producto: ${producto.nombre} con ${producto.oferta}% de descuento`;
    const urlEncoded = encodeURIComponent(mensaje);
    const telefono = "1133703961"; // 
    const wpUrl = `https://wa.me/${telefono}?text=${urlEncoded}`;
    window.open(wpUrl, "_blank");
  };

  const loopItems = destacadas.concat(destacadas);

  return (
    <section
      className="w-full h-[12rem] overflow-hidden relative md:bg-gradient-to-t from-[#1a1a1acc] via-[#2d2d2d95] to-[#1a1a1a00] top-1 md:top-54 flex items-center justify-center md:shadow-lg"
      aria-label="Cinta deslizante con productos destacados"
    >
      {!destacadas || destacadas.length === 0 ? (
        <Loader />
      ) : (
        <ul className="flex w-max animate-scrollBanner hover:[animation-play-state:paused]">
          {loopItems.map((item: Idestacadas, i) => (
            <li
              key={i}
              onClick={() => handleDetail(item)}
              className="w-[150px] h-[170px] flex-shrink-0 relative mx-2 cursor-pointer"
            >
              <Image
                src={item.imagen}
                width={500}
                height={500}
                alt={`Imagen del producto ${item.nombre} con ${item.oferta}% de descuento`}
                className="object-cover h-full w-full rounded"
              />
              <div className="absolute top-0 left-0 overflow-hidden w-[76px] h-[76px]">
                <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50">
                  -{item.oferta}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

{
  /*
  PRIMER VERSION
  "use client";
import { useState, useEffect, useContext } from "react";
import { ContextApp, Idestacadas } from "../../context/context";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Carousel = () => {
  const [current, setCurrent] = useState<number>(0);
  const { destacadas } = useContext(ContextApp);
  const router = useRouter();

  const next = () => {
    setCurrent((prev) => (prev + 1) % destacadas.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + destacadas.length) % destacadas.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destacadas.length);
    }, 5000); // cada 5 segundos

    return () => clearInterval(interval);
  }, [destacadas.length]);
  const handleDetail = async (id: string) => {
    router.push(`/detailItem/${id}`);
  };

  if (!destacadas || destacadas.length === 0) return <p>No hay destacadas.</p>;

  return (
    <section className="w-full h-[12rem] bg-gradient-to-t from-[#1a1a1acc] via-[#2d2d2d95] to-[#1a1a1a00] bottom-0 absolute flex flex-col items-center md:items-center md:justify-center p-1 rounded-xs shadow-lg ">
      <span className="sr-only"> carrusel de ofertas destacadas</span>
      <section className="relative w-[250px] h-[150px] overflow-hidden rounded ">
        <article
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {destacadas.map((destacada: Idestacadas, i) => (
            <div
              key={i}
              className="w-[250px] h-[150px] flex-shrink-0 relative flex items-center justify-center hover:cursor-pointer"
              onClick={() => handleDetail(destacada.id)}
            >
              <Image
                src={destacada.imagen[2]}
                width={500}
                height={500}
                alt={`Imagen del producto ${destacada.nombre} con ${destacada.oferta}% de descuento`}
                className="object-cover h-full w-full"
              />
              <div className="absolute top-0 left-0 overflow-hidden w-[76px] h-[76px]">
                <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50 hover:scale-101 transition duration-300 ">
                  -{destacada.oferta}%
                </div>
              </div>
            </div>
          ))}
        </article>

        <button
          aria-label="ver anterior"
          onClick={prev}
          className="absolute top-1/2 left-[-3px] transform -translate-y-1/2 text-white rounded z-20 hover:cursor-pointer"
        >
          <Image
            src="/arrow-icon.png"
            width={500}
            height={500}
            alt="miniatura de flecha izquierda"
            className="object-cover h-5 w-5 hover:scale-108 transition-all duration-100 rotate-180 "
          />
        </button>
        <button
          aria-label="ver siguiente"
          onClick={next}
          className="absolute top-1/2 right-[-3px] transform -translate-y-1/2 text-white rounded z-20 hover:cursor-pointer"
        >
          <Image
            src="/arrow-icon.png"
            width={500}
            height={500}
            alt="miniatura de flecha derecha"
            className="object-cover h-5 w-5 hover:scale-108 transition-all duration-100 "
          />
        </button>

        <article className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="sr-only">selector de carrusel</span>
          {destacadas.map((_, i) => (
            <div
              key={i}
              role="button"
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={current === i ? "true" : undefined}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === i ? "bg-[#c1bfb8] border-2 border-red-800" : "bg-custom-2"
              }`}
            />
          ))}
        </article>
      </section>
    </section>
  );
};
*/
}
