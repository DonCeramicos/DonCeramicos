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

if (!destacadas || destacadas.length === 0) return <p>No hay destacadas.</p>;

  return (
<div className="relative w-[500px] h-[500px] mx-auto overflow-hidden rounded border">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {destacadas.map((destacada, i) => (
      <div
        key={i}
        className="w-[500px] h-[500px] flex-shrink-0 relative flex items-center justify-center"
      >
        <Image
          src={destacada.imagen[1]}
          width={500}
          height={500}
          alt="oferta destacada"
        />
        <div className="absolute top-0 left-0 overflow-hidden w-[76px] h-[76px]">
          <div className="bg-red-600 text-white text-[10px] font-bold rotate-[-45deg] w-[100px] text-center absolute top-3 left-[-30px] z-50 hover:scale-101 transition duration-300 ">
            -{destacada.oferta}%
          </div>
        </div>
      </div>
    ))}
  </div>

  <button
    onClick={prev}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded z-20 hover:cursor-pointer"
  >
    ◀
  </button>
  <button
    onClick={next}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded z-20 hover:cursor-pointer"
  >
    ▶
  </button>

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {destacadas.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          current === i ? "bg-red-600" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>

  );
};
