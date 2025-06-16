"use client";
import { Product_Card } from "../Product_Card";
import { useContext } from "react";
import { ContextApp } from "../../context/context";
import { ICeramicos } from "../../context/context";

export const ProductList = () => {
  const { ceramicos } = useContext(ContextApp);
  console.log(ceramicos);

  return (
    <div
      id="catalogo"
      className="flex flex-col flex-wrap justify-center items-center h-[97vh] md:h-[91vh] scroll-mt-16 bg-custom"
    >
      <h1
        style={{ color: "#bababa" }}
        className="font-rancho font-light  text-left mx-8  md:mx-1 text-[2.4rem]  translate-x-[-35.8rem] top-[-2rem]"
      >
        Nuestros Productos
      </h1>
      <div className="relative w-[90%] h-[90%] p-1">
        {/* Fondo dividido en 4 cuadrantes */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0  gap-1">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tl-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-tr-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-bl-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
          <div
            className="bg-cover bg-no-repeat bg-center rounded-br-lg "
            style={{ backgroundImage: "url(/background-product2.jpg)" }}
          ></div>
        </div>
<div className="grid gap-2 overflow-y-auto h-full z-10 relative pr-2">
  {ceramicos.map((ceramico: ICeramicos) => (
    <Product_Card ceramico={ceramico} key={ceramico.id} />
  ))}
</div>

      </div>
    </div>
  );
};
