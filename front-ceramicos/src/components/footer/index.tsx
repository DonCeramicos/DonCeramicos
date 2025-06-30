"use client";
import { usePathname } from "next/navigation";
export const Footer = () => {
  const path = usePathname();
  return (
    <footer
      className={`w-full h-full z-60 relative flex flex-wrap justify-center gap-6 md:flex-row md:justify-evenly ${
        path === "/catalogo" ? "bg-black" : "bg-custom-5"
      } color-font-2 py-3 px-4 font-phudu text-[12px]`}
    >
      <span className="sr-only">
        Pie de pagina de Don Ceramicos con datos de contacto telfonico redes
        sociales, correo electronico y medios de pago
      </span>

      {/* CONTACTO */}
      <section className="flex flex-col gap-2 w-[45%] min-w-[140px] max-w-[240px] md:items-start order-1">
        <p className="text-left w-full">CONTACTANOS</p>
        <a
          href="tel:+5491133703961"
          className="flex gap-2 items-center hover:underline w-full"
        >
          <img src="/telefono-movil.png" alt="telefono" className="h-6 w-6" />
          <p>+54 9 1133703961</p>
        </a>
        <a
          href="mailto:donceramicos.info@gmail.com"
          className="flex gap-2 items-center hover:underline text-[10px] md:text-[12px]"
        >
          <img src="/arroba.png" alt="correo electronico" className="h-5 w-5" />
          <p>donceramicos.info@gmail.com</p>
        </a>
      </section>

      {/* REDES */}
      <section className="flex flex-col gap-2 w-[45%] min-w-[140px] max-w-[240px] items-left md:items-center order-3">
        <p className="text-left md:text-center">REDES</p>
        <div className="flex gap-4">
          <a
            aria-label="facebook"
            href="https://www.facebook.com/p/Don-cer%C3%A1micos-100068413961241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebook.png"
              alt="facebook"
              className="h-6 w-6 hover:scale-110 transition"
            />
          </a>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/reel/DCCDuEYOjtj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.png"
              alt="instagram"
              className="h-6 w-6 hover:scale-110 transition border-1 border-amber-50 rounded-full"
            />
          </a>
          <a
            aria-label="whatsapp"
            href="https://wa.me/+5491133703961?text=Hola!%20Quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp.png"
              alt="whatsapp"
              className="h-6.5 w-6.5 hover:scale-110 transition "
            />
          </a>
        </div>
      </section>

      {/* DIRECCION */}
      <section className="flex flex-col gap-2 w-[45%] min-w-[140px] max-w-[240px]  items-center md:items-center text-center md:text-left order-2">
        <p className="text-right md:text-center w-full">DIRECCION</p>
        <a
          href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <p className="text-right md:text-center w-full">J. Hernandez 4490</p>
          <p className="text-right md:text-center w-full">
            a 100 mts de la Estación Claypole, PBA
          </p>
        </a>
      </section>

      {/* MEDIOS DE PAGO */}
      <aside className="flex flex-col gap-2 w-[45%] min-w-[140px] max-w-[240px]  text-right md:text-right order-4">
        <p>CONSULTA NUESTROS MEDIOS DE PAGO</p>
        <p>Horarios de atencion: Lunes a Viernes de 9 a 19hs</p>
      </aside>
    </footer>
  );
};
