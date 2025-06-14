export const Footer = () => {
  return (
    <footer className="w-full z-60 relative flex flex-col  gap-6 md:flex-row md:justify-evenly bg-amber-900 text-amber-50 py-3 px-4 h-auto">
      
      {/* CONTACTO */}
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center md:items-start">
        <h3 className="text-center">CONTACTANOS</h3>
        <a href="tel:+5491123456789" className="flex gap-2 items-center hover:underline">
          <img src="/telefono-movil.png" alt="telefono" className="h-5 w-5" />
          <h4>+54 9 11 2345-6789</h4>
        </a>
        <a href="mailto:donceramicos.info@gmail.com" className="flex gap-2 items-center hover:underline">
          <img src="/arroba.png" alt="correo electronico" className="h-5 w-5"/>
          <p>donceramicos.info@gmail.com</p>
        </a>
      </div>

      {/* REDES */}
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center">
        <h3 className="text-center">REDES</h3>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/p/Don-cer%C3%A1micos-100068413961241" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" className="h-5 w-5 hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/reel/DCCDuEYOjtj/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="instagram" className="h-5 w-5 hover:scale-110 transition" />
          </a>
          <a href="https://wa.me/+5491128254000?text=Hola!%20Quiero%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="whatsapp" className="h-5 w-5 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* DIRECCION */}
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-[14px] items-center md:items-center text-center md:text-left">
        <h3  className="text-center w-full">DIRECCION</h3>
        <a
          href="https://maps.app.goo.gl/YuBqy4cyh26zL5bJA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline "
        >
          <h4 className="text-center  w-full">J. Hernandez 4490</h4>
          <h4 className="text-center  w-full">frente a la Estación Claypole, PBA</h4>
        </a>
      </div>

      {/* MEDIOS DE PAGO */}
      <div className="flex flex-col gap-2 w-full max-w-[240px] text-[14px]">
        <h3 className="text-right">CONSULTAR MEDIOS DE PAGO</h3>
        <p className="text-right">Horarios de atencion: Lunes a Viernes de 9 a 18hs</p>
      </div>
    </footer>
  );
};
