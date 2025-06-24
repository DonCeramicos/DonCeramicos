import { Carousel } from "../carousel";

export const HomeComponent = () => {
  return (
    <section
      id="home"
      className="h-[92vh] md:h-[91vh] relative flex flex-col scroll-mt-24 bg-gradient-to-b from-[#000000d9] to-transparent"
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
      <section className="relative z-30 flex flex-col items-center h-full ">
        <span className="sr-only">Título: Don ceramicos</span>
        <h1 className="texto-con-borde megolan text-6xl w-[20rem] md:text-[8rem] md:w-[47.5rem] text-center mx-auto mt-[8rem] md:mt-[4rem] text-[#1a1a1a] md:color-font ">
          Don Ceramicos
        </h1>
        <h2
          aria-label="Explorá cerámicos para piso y pared con estilo."
          className="font-phudu w-auto md:text-[1rem]  z-10 text-center mx-auto text-[#0f0f0f]  mt-[0.1rem]"
        >
          Explorá cerámicos para piso y pared con estilo.
        </h2>
        <a
          aria-label="Pedi tu presupuesto"
          href="#contacto"
          className="personal-bounce bn632-hover bn19 flex justify-center items-center mx-auto md:items-center md:py-2 md:px-6 md:text-xl font-poiret-one font-extrabold traking-widest hover:cursor-pointer z-40 md:mt-[1rem] mt-[4.5rem] text-black"
        >
          PEDI TU PRESUPUESTO
        </a>
        
        <Carousel />
      </section>
    </section>
  );
};
