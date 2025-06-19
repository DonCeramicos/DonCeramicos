"use client";

import { ProductList } from "@/components/ProductList";
import { Offers } from "@/components/offers";
import { Carousel } from "@/components/carousel";

export default function Catalogo ()  {
  return (
    <div className="w-full ">
{/* Fondo degradado con imagen y máscara */}
  <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#373737,transparent)]">
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/background-catalogo.png)" }}
    ></div>
  </div>
      {/* Sección 1: Productos */}
      <section className="h-[100vh] scroll-mt-24 bg-gradient-to-b from-[#000000d9] to-transparent  " id="productos">
        <ProductList />
      </section>

      {/* Sección intermedia: subtítulo + carousel */}
      <section className="h-fit md:h-[40vh] bg-gradient-to-b from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a] flex flex-col items-center justify-center gap-4 py-10 px-6 text-white">
        <h2 className="text-4xl font-poiret-one text-center text-amber-400">
          Mirá nuestras ofertas más destacadas
        </h2>
        <p className="text-sm md:text-base text-center max-w-[40rem] text-gray-300 leading-relaxed">
          Ofrecemos cerámicos de alta calidad con precios irresistibles. <br />
          Renová tus espacios con estilo y aprovechá los descuentos exclusivos de este mes.
        </p>
      </section>

      {/* Sección 2: Ofertas */}
      <section className="h-[100vh] scroll-mt-24" id="ofertas">
        <Offers />
      </section>
    </div>
  );
};
