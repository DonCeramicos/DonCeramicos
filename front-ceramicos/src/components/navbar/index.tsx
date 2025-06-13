import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6">
        <a href="#home">
        <Image
        src="/logo-bg.png"
        alt="logo"
        width={130}
        height={100}        
        />
        </a>
      <ul className="flex gap-6 font-philosopher text-[13px]">
        <a href="#catalogo" className="hover:text-gray-300 transition-all duration-300">CATALOGO</a>
        <a href="#ofertas" className="hover:text-gray-300 transition-all duration-300">OFERTAS</a>
        <a href="#contacto" className="hover:text-gray-300 transition-all duration-300">CONTACTO</a>
      </ul>
    </nav>
  );
};
