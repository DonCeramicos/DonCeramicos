"use client";

import { ProductList } from "@/components/ProductList";
import { Offers } from "@/components/offers";

export default function Catalogo() {
  return (
    <main className="w-full ">
      {/* Sección 1: Productos */}
      <h2 className="sr-only">Catalogo de productos y ofertas de ceramicos del comercio: Don Ceramicos</h2>
      <section
        className="h-[90.5vh] scroll-mt-3 bg-gradient-to-b from-[#000000d9] to-transparent "
        id="productos"
      >
        {/* Fondo degradado con imagen y máscara */}
        <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#373737,transparent)]">
          <div
            className="bg-cover bg-no-repeat bg-center  mask-custom"
            style={{ backgroundImage: "url(/background-catalogo.png)" }}
          ></div>
        </div>
        <h2 className="sr-only">Productos</h2>
        <ProductList />
      </section>

      {/* Sección intermedia: subtítulo y parrafo */}
      <section className="relative z-10 h-[60vh] bg-gradient-to-b from-[#ffffff] via-[#1a1810cf] to-[#000000] flex flex-col items-center justify-center gap-4 text-white">
        <h2 className="text-4xl font-poiret-one font-extrabold text-center color-font-4">
          Mirá nuestras ofertas más destacadas
        </h2>
        <p className="md:text-base text-center max-w-[40rem] color-font-3 leading-relaxed">
          Ofrecemos cerámicos de alta calidad con precios irresistibles. <br />
          Renová tus espacios con estilo y aprovechá los descuentos exclusivos
          de este mes.
        </p>
      </section>

      {/* Sección 2: Ofertas */}
      <section
        className=" h-[95vh] scroll-mt-16 pt-3 relative bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] "
        id="ofertas"
      >
        {/* Fondo degradado con imagen y máscara */}

        <div className="absolute inset-0 grid  [mask-image:linear-gradient(to_top,#bfbfbf,transparent)] ">
          <div
            className=" bg-cover bg-center bg-no-repeat   "
            style={{ backgroundImage: "url('/background-offers.jpg')" }}
          ></div>
        </div>
        <h2 className="sr-only">Ofertas mensuales</h2>
        <Offers />
      </section>
    </main>
  );
}
