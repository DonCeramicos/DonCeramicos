import { Navbar } from "../navbar";
import WhatsAppFloatingButton from "../whatsApp-Button";


export const HomeComponent = () => {
  return (
    <div id="home" className=" h-[100vh]">
      {/* Fondo dividido en 4 cuadrantes */}

      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0">
        {/* Cuadrante superior derecho liso */}
        <div className="bg-custom"></div>

        {/* Cuadrante superior izquierdo con imagen */}
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/background-app.jpg)" }}
        ></div>

        {/* Cuadrante inferior derecho con imagen */}
        <div
          className="bg-cover bg-no-repeat bg-center rotate-180"
          style={{ backgroundImage: "url(/background-app.jpg)" }}
        ></div>

        {/* Cuadrante inferior izquierdo liso */}
        <div className="bg-custom"></div>
      </div>

      {/* Contenido por encima */}
      <div className="relative z-10 h-full">

        <h1 style={{color:"#a93737"}} className="font-poiret-one text-6xl mt-45 w-[24rem] text-left mx-8 font-bold md:text-[8.8rem] md:w-[46rem] md:mt-30 md:mx-1">
          DON CERAMICOS
        </h1>

        <div className="personal-bounce mt-10 bn632-hover bn19 flex justify-center items-center mx-auto md:items-center md:ml-6 md:py-2 md:px-6 text-[1rem] md:text-2xl font-phudu hover:cursor-pointer md:justify-center">
          <a href="#contacto">PEDI TU PRESUPUESTO</a>
        </div>

        <WhatsAppFloatingButton />

      </div>
    </div>
  );
};
