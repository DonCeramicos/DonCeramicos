export const Footer = () => {
  return (
    <footer className="w-full z-60 relative flex flex-col  gap-6 md:flex-row md:justify-evenly bg-custom-2 color-font-2 py-3 px-4 h-auto">
      <h2 className="sr-only">Pie de pagina de Don Ceramicos con datos de contacto telfonico redes sociales, correo electronico y medios de pago</h2>
      {/* CONTACTO */}
      <section className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center md:items-start">
        <h3 className="text-center">CONTACTANOS</h3>
        <a href="tel:+5491123456789" className="flex gap-2 items-center hover:underline">
          <img src="/telefono-movil.png" alt="telefono" className="h-5 w-5" />
          <h4 aria-label="te brindamos nuestro telefono:">+54 9 11 2345-6789</h4>
        </a>
        <a href="mailto:donceramicos.info@gmail.com" className="flex gap-2 items-center hover:underline">
          <img src="/arroba.png" alt="correo electronico" className="h-5 w-5"/>
          <p aria-label="nuestro correo electronico:">donceramicos.info@gmail.com</p>
        </a>
      </section>

      {/* REDES */}
      <section className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center">
        <h3 className="text-center">REDES</h3>
        <div className="flex gap-4">
          <a aria-label="nos encontras en facebook" href="https://www.facebook.com/p/Don-cer%C3%A1micos-100068413961241" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" className="h-5 w-5 hover:scale-110 transition" />
          </a>
          <a aria-label="nos encontras en instagram" href="https://www.instagram.com/reel/DCCDuEYOjtj/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="instagram" className="h-5 w-5 hover:scale-110 transition" />
          </a>
          <a aria-label="nos encontras en whatsapp" href="https://wa.me/+5491128254000?text=Hola!%20Quiero%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="whatsapp" className="h-5 w-5 hover:scale-110 transition" />
          </a>
        </div>
      </section>

      {/* DIRECCION */}
      <section className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center md:items-center text-center md:text-left">
        <h3 className="text-center w-full">DIRECCION</h3>
        <a
          href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline "
          aria-label="direccion de la empresa: J. Hernandez 4490 frente a la Estación Claypole, PBA"
        >
          <h4 aria-label="direccion de la empresa: J. Hernandez 4490" className="text-center  w-full">J. Hernandez 4490</h4>
          <h4 aria-label="a 100 mts de la Estación Claypole, PBA" className="text-center  w-full">a 100 mts de la Estación Claypole, PBA</h4>
        </a>
      </section>

      {/* MEDIOS DE PAGO */}
      <aside className="flex flex-col gap-2 w-full max-w-[240px] text-[14px]">
        <h3 aria-label="consulta nuestros medios de pago" className="text-right">CONSULTA NUESTROS MEDIOS DE PAGO</h3>
        <p aria-label="horarios de atencion: Lunes a Viernes de 9 a 18hs" className="text-right">Horarios de atencion: Lunes a Viernes de 9 a 18hs</p>
      </aside>
    </footer>
  );
};
