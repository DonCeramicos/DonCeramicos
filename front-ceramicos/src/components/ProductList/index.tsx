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
      <h1 className="font-phudu font-light w-[24rem] text-left mx-8  md:mx-1 text-amber-50 text-[1.5rem] border">Nuestos Productos</h1>
      <div className="relative w-[90%] h-[90%] overflow-y-auto p-1">
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
        {ceramicos.map((ceramico: ICeramicos) => (
          <Product_Card ceramico={ceramico} key={ceramico.id} />
        ))}
      </div>
    </div>
  );
};
