"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-custom-2 flex justify-evenly items-center px-2  sticky top-0 z-100">
      {/* Logo */}
      <a href="#home">
        <Image src="/logo-bg.png" alt="logo" width={130} height={100} />
      </a>

      {/* Listado para pc*/}
      <ul  className=" color-font-2 hidden md:flex gap-6 font-rancho tracking-wider text-[20px] p-2 rounded">
       <Link href="/#home" className="hover:scale-105 transition-all duration-300">
          Inicio
        </Link>
        <Link href="/catalogo/#catalogo" className="hover:scale-105 transition-all duration-300">
          Catalogo
        </Link>
        <Link href="/catalogo/#ofertas" className="hover:scale-105 transition-all duration-300">
          Ofertas
        </Link>
        <Link href="/#contacto" className="hover:scale-105 transition-all duration-300">
          Contacto
        </Link>
      </ul>

{/* Botón hamburguesa - Mobile */}
{!isOpen && (
  <button
    onClick={toggleMenu}
    className="md:hidden text-amber-900 focus:outline-none z-50"
  >
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
)}


      {/* Menú desplegable */}
      {isOpen && (
        <div className="fixed inset-0 bg-amber-900/90 flex flex-col items-center justify-center gap-8 text-white text-2xl font-phudu z-40 transition duration-300">
          {/* Botón de cierre */}
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-1 text-white"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links mobile */}
          <a href="#home" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            INICIO
          </a>
          <a href="#catalogo" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            CATALOGO
          </a>
          <a href="#ofertas" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            OFERTAS
          </a>
          <a href="#contacto" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            CONTACTO
          </a>
        </div>
      )}
      
    </nav>
  );
};
