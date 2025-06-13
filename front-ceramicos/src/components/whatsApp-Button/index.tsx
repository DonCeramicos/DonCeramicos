import Image from "next/image";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/+5491128254000?text=Hola!%20Quiero%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-pulse"
    >
      <Image
        src="/whatsapp-button.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
}
