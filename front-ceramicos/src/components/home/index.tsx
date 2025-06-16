export const HomeComponent = () => {
  return (
    <div
      id="home"
      className="h-[100vh] md:h-[91vh] relative z-0 flex flex-col justify-center scroll-mt-24"
    >
      {/* Fondo dividido en 4 cuadrantes */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0  bg-black gap-1">
        <div className="bg-custom"></div>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url(/background-app.jpg)" }}
        ></div>
        <div className="bg-custom"></div>
        <div
          className="bg-cover bg-no-repeat bg-center rotate-180"
          style={{
            backgroundImage: "url(/background-app.jpg)",
            transform: "rotate(180deg)",
            transformOrigin: "center center",
          }}
        ></div>
      </div>

      {/* Contenido por encima */}
      <div className="relative z-10 flex flex-col gap-6 translate-y-12 md:translate-y-14">
          <h1
            //style={{ color: "#bababa" }}
            className="font-poiret-one text-6xl w-[24rem] text-left mx-12 font-extrabold md:text-[8.7rem] md:w-[47.5rem] md:mx-[.5] bg-clip-text text-transparent bg-[url('/background-title.jpg')] bg-cover bg-right"
          >
            DON CERAMICOS
          </h1>

        <div className="personal-bounce bn632-hover bn19 flex justify-center items-center mx-auto md:items-center md:ml-6 md:py-2 md:px-6 text-[1rem] md:text-2xl font-phudu hover:cursor-pointer md:justify-center">
          <a href="#contacto">PEDI TU PRESUPUESTO</a>
        </div>
      </div>
    </div>
  );
};
