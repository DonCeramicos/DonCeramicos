"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-custom-2 sticky top-0 z-50 flex justify-evenly items-center">
      <span className="sr-only">
        Barra de navegación con opciones para dirigirse a las distintas secciones de la página
      </span>

      {/* Logo */}
      <Link
        href="/#home"
        className="hover:scale-105 transition-all duration-300"
        aria-label="Ir al inicio"
      >
        <Image
          src="/logo-bg.png"
          alt="Logo de Don Cerámicos"
          width={130}
          height={100}
        />
      </Link>

      {/* Navegación Desktop */}
      <ul className="hidden md:flex gap-6 font-rancho tracking-wider text-[20px] color-font-2">
        <li>
          <Link aria-label="Ir al inicio" href="/#home" className="hover:scale-105 transition-all duration-300">Inicio</Link>
        </li>
        <li>
          <Link aria-label="Ir al catálogo" href="/catalogo/#catalogo" className="hover:scale-105 transition-all duration-300">Catálogo</Link>
        </li>
        <li>
          <Link aria-label="Ir a las ofertas" href="/catalogo/#ofertas" className="hover:scale-105 transition-all duration-300">Ofertas</Link>
        </li>
        <li>
          <Link aria-label="Ir al contacto" href="/#contacto" className="hover:scale-105 transition-all duration-300">Contacto</Link>
        </li>
      </ul>

      {/* Botón Hamburguesa - Mobile */}
      <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className={`md:hidden focus:outline-none ${isOpen ? "text-black" : "text-white"} z-50`}
      >
        {isOpen ? (
          <svg aria-label="Cerrar menú" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-label="Abrir menú" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menú Desplegable - Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#c0b283] flex flex-col items-center justify-center gap-8 text-[#373737] text-2xl font-phudu z-40 transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <a aria-label="Ir al inicio" href="/#home" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            INICIO
          </a>
          <a aria-label="Ir al catálogo" href="/catalogo/#catalogo" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            CATALOGO
          </a>
          <a aria-label="Ir a las ofertas" href="/catalogo/#ofertas" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            OFERTAS
          </a>
          <a aria-label="Ir al contacto" href="/#contacto" onClick={toggleMenu} className="hover:scale-105 transition-all duration-300">
            CONTACTO
          </a>
        </div>
      )}
    </nav>
  );
};
