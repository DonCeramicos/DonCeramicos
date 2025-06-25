"use client";

import { ProductList } from "@/components/ProductList";
import { SEO } from "@/components/SEO";
import { Offers } from "@/components/offers";

export default function Catalogo() {
  return (
    <>
      <SEO
        title={`Don Cerámicos `}
        description={ `Descubrí nuestra amplia variedad de cerámicos para pisos y paredes, con calidad premium y diseños exclusivos.`}
        canonicalUrl={`https://donceramicos.com/catalogo`}
      />
      <main className="w-full border-none">
        {/* Sección 1: Productos */}
        <span className="sr-only">
          Catalogo de productos y ofertas de ceramicos del comercio: Don
          Ceramicos
        </span>
        <section
          className="bg-gradient-to-b from-[#000000d9] to-transparent "
        >
          {/* Fondo degradado con imagen y máscara */}
          <div className="absolute inset-0 grid z-[-1] [mask-image:linear-gradient(to_top,#373737,transparent)]">
            <div
              className="bg-cover bg-no-repeat bg-center  mask-custom"
              style={{ backgroundImage: "url(/background-catalogo.png)" }}
            ></div>
          </div>
          <span className="sr-only">Productos</span>
          <ProductList />
        </section>

        {/* Sección intermedia: subtítulo y parrafo */}
        <section className="relative  h-[60vh] bg-gradient-to-b from-[#ffffff] via-[#1a1810cf] to-[#000000] flex flex-col font-phudu items-center justify-center gap-4 text-white">
          <h2 className="text-4xl font-poiret-one font-extrabold text-center text-[#1d1d1c]">
            Mirá nuestras ofertas destacadas
          </h2>
          <p className="md:text-base text-center max-w-[40rem] color-font-3 leading-relaxed">
            Ofrecemos cerámicos de alta calidad con precios irresistibles.{" "}
            <br />
            Renová tus espacios con estilo y aprovechá los descuentos exclusivos
            de este mes.
          </p>
        </section>

        {/* Sección 2: Ofertas */}
        <section
          className="  pt-3 relative bg-gradient-to-b from-[#000000] via-[#000000] to-[#000000] "
        >
          {/* Fondo degradado con imagen y máscara */}

          <div className="absolute inset-0 grid  [mask-image:linear-gradient(to_top,#bfbfbf,transparent)] ">
            <div
              className=" bg-cover bg-center bg-no-repeat mask-custom  "
              style={{ backgroundImage: "url('/background-offers.jpg')" }}
            ></div>
          </div>
          <span className="sr-only">Ofertas mensuales</span>
          <Offers />
        </section>
      </main>
    </>
  );
}
