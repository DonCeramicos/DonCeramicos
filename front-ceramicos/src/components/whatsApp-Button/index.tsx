import Image from "next/image";

export default function WhatsAppFloatingButton() {
  return (
    <a
      aria-label="nos encontras en whatsapp"
      href="https://wa.me/+5491133703961?text=Hola!%20Quiero%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-53 md:bottom-50 right-1 md:right-6 z-50 animate-pulse"
    >
      <Image
        src="/whatsapp-button.png"
        alt="icono de WhatsApp"
        width={70}
        height={70}
        className="hover:scale-110 transition-transform duration-300 w-15 h-15"
      />
    </a>
  );
}
