import { Navbar } from "../navbar";
import WhatsAppFloatingButton from "../whatsApp-Button";
export const HomeComponent = () => {
  return (
    <div id="home">
      <Navbar />
      <h1 className="font-poiret-one text-9xl mt-40 w-[50rem] text-left px-6 font-bold ">DON CERAMICOS</h1>
      
      <div className="personal-bounce mt-20 bn632-hover bn19 flex items-center ml-7 py-2 px-6 text-2xl font-philosopher hover:cursor-pointer justify-center">
      <a href="#contacto">
        PEDI TU PRESUPUESTO
      </a>
      </div>

      <WhatsAppFloatingButton />
      
    </div>
  );
};
