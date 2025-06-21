import { Carousel } from "../carousel";

export const HomeComponent = () => {
  return (
    <section
      id="home"
      className="h-[100vh] md:h-[92vh] relative flex flex-col scroll-mt-24 bg-gradient-to-b from-[#000000d9] to-transparent"
    >
      <span className="sr-only">Seccion Principal de la pagina</span>
      {/* Fondo degradado con imagen */}
      <div className="absolute inset-0 grid top-0 left-0 right-0 bottom-0 z-0  [mask-image:linear-gradient(to_top,#373737,transparent)]">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/background-app.jpg)" }}
        ></div>
      </div>
      {/* Contenido por encima del fondo de imagen */}
      <section className="relative z-30 flex flex-col items-center  h-full">
        <span className="sr-only">Título: Don ceramicos</span>
        <h1 className="font-rancho text-6xl w-[24rem] md:text-[8rem] md:w-[47.5rem] text-center mx-auto mt-[4rem] color-font-4">
          Don Ceramicos
        </h1>
        <h2
          aria-label="Explorá cerámicos para piso y pared con estilo."
          className="font-poiret-one w-auto  font-extrabold text-xl  z-10 text-center mx-auto text-black mt-[0.1rem]"
        >
          Explorá cerámicos para piso y pared con estilo.
        </h2>
        <a
          aria-label="Pedi tu presupuesto"
          href="#contacto"
          className="personal-bounce bn632-hover bn19 flex justify-center items-center mx-auto md:items-center md:py-2 md:px-6 md:text-xl font-poiret-one font-extrabold hover:cursor-pointer z-40 mt-[1rem]"
        >
          PEDI TU PRESUPUESTO
        </a>
        <Carousel />
      </section>
    </section>
  );
};
