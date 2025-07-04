// scripts/seed.ts
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

// 🔹 Productos cerámicos
const ceramicos = [
  {
    nombre: "Cerámico Beige Brillante",
    valor: 4500,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Cerámico ideal para cocina con terminación brillante.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Mate",
    valor: 5200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Diseño sobrio y moderno para baños.",
    categoria: "Pared",
    marca: "Marca Dos",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Satinado",
    valor: 4700,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Perfecto para ambientes luminosos y modernos.",
    categoria: "Pared",
    marca: "Marca Tres",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Arena Texturado",
    valor: 5100,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Textura suave y elegante para interiores.",
    categoria: "Piso",
    marca: "Marca Cuatro",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Negro Brillante",
    valor: 6000,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque sofisticado para cocinas modernas.",
    categoria: "Piso",
    marca: "Marca Cinco",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Claro",
    valor: 4900,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Moderno y funcional.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Terracota",
    valor: 4600,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Rústico y con personalidad.",
    categoria: "Piso",
    marca: "Marca Seis",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Mate",
    valor: 4300,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Ideal para espacios amplios.",
    categoria: "Pared",
    marca: "Marca Siete",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Mármol Gris",
    valor: 6200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Inspiración en mármol natural.",
    categoria: "Piso",
    marca: "Marca Ocho",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Azul Vintage",
    valor: 4800,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque nostálgico con personalidad.",
    categoria: "Pared",
    marca: "Marca Nueve",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Beige Brillante",
    valor: 4500,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Cerámico ideal para cocina con terminación brillante.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Mate",
    valor: 5200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Diseño sobrio y moderno para baños.",
    categoria: "Pared",
    marca: "Marca Dos",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Satinado",
    valor: 4700,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Perfecto para ambientes luminosos y modernos.",
    categoria: "Pared",
    marca: "Marca Tres",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Arena Texturado",
    valor: 5100,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Textura suave y elegante para interiores.",
    categoria: "Piso",
    marca: "Marca Cuatro",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Negro Brillante",
    valor: 6000,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque sofisticado para cocinas modernas.",
    categoria: "Piso",
    marca: "Marca Cinco",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Claro",
    valor: 4900,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Moderno y funcional.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Terracota",
    valor: 4600,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Rústico y con personalidad.",
    categoria: "Piso",
    marca: "Marca Seis",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Mate",
    valor: 4300,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Ideal para espacios amplios.",
    categoria: "Pared",
    marca: "Marca Siete",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Mármol Gris",
    valor: 6200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Inspiración en mármol natural.",
    categoria: "Piso",
    marca: "Marca Ocho",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Azul Vintage",
    valor: 4800,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque nostálgico con personalidad.",
    categoria: "Pared",
    marca: "Marca Nueve",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Beige Brillante",
    valor: 4500,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Cerámico ideal para cocina con terminación brillante.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Mate",
    valor: 5200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Diseño sobrio y moderno para baños.",
    categoria: "Pared",
    marca: "Marca Dos",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Satinado",
    valor: 4700,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Perfecto para ambientes luminosos y modernos.",
    categoria: "Pared",
    marca: "Marca Tres",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Arena Texturado",
    valor: 5100,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Textura suave y elegante para interiores.",
    categoria: "Piso",
    marca: "Marca Cuatro",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Negro Brillante",
    valor: 6000,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque sofisticado para cocinas modernas.",
    categoria: "Piso",
    marca: "Marca Cinco",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Gris Claro",
    valor: 4900,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: false,
    descripcion: "Moderno y funcional.",
    categoria: "Piso",
    marca: "Marca Uno",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Terracota",
    valor: 4600,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "45x45 cm",
    oferta: true,
    descripcion: "Rústico y con personalidad.",
    categoria: "Piso",
    marca: "Marca Seis",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Blanco Mate",
    valor: 4300,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x60 cm",
    oferta: false,
    descripcion: "Ideal para espacios amplios.",
    categoria: "Pared",
    marca: "Marca Siete",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Mármol Gris",
    valor: 6200,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "60x60 cm",
    oferta: true,
    descripcion: "Inspiración en mármol natural.",
    categoria: "Piso",
    marca: "Marca Ocho",
    cantidad: 0,
  },
  {
    nombre: "Cerámico Azul Vintage",
    valor: 4800,
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente_p3i5nk.webp",
    dimensiones: "30x30 cm",
    oferta: false,
    descripcion: "Toque nostálgico con personalidad.",
    categoria: "Pared",
    marca: "Marca Nueve",
    cantidad: 0,
  },
];

// 🔹 Productos destacados
const destacadas = [
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_ajhdaf.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_4_hkvjnv.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/w_1036_h_832_f_webp_fit_contain_q_85_1_ynajt9.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/w_960_h_832_f_webp_fit_contain_q_85_l4nbti.webp",
    oferta: 10,
  },
  {
    nombre: "Cerámico Texturado Arena",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    oferta: 10,
  },
  {
    nombre: "pegamento cerámico flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento_o6tedz.webp",
    oferta: 10,
  },
  {
    nombre: "pegamento cerámico flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639557/pegamento5_bpsp0i.webp",
    oferta: 10,
  },
  {
    nombre: "pegamento cerámico flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento4_oizriz.webp",
    oferta: 10,
  },
  {
    nombre: "pegamento cerámico flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639539/porcelanato_lgizyw.png",
    oferta: 10,
  },
];

// 🔹 Porcelanatos
const porcelanatos = [
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
  {
    nombre: "Porcelanato Ámbar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Elegancia y resistencia para cualquier ambiente.",
  },
  {
    nombre: "Porcelanato Blanco Polar",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Ideal para espacios modernos y luminosos.",
  },
  {
    nombre: "Porcelanato Cemento Gris",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Toque industrial con textura realista.",
  },
  {
    nombre: "Porcelanato Beige Arena",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639399/w_1036_h_832_f_webp_fit_contain_q_85_11_kaeypv.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639398/w_1036_h_832_f_webp_fit_contain_q_85_9_qbxjtj.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/ambiente4_j4jbab.webp",
    oferta: false,
    descripcion: "Calidez natural con un diseño clásico.",
  },
  {
    nombre: "Porcelanato Mármol Carrara",
    imagen: [
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639397/w_1036_h_832_f_webp_fit_contain_q_85_7_y50y57.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_5_lpnbcb.webp",
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639396/w_1036_h_832_f_webp_fit_contain_q_85_6_zfxkfg.webp",
    ],
    ambiente:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639395/ambiente2_dit9dc.webp",
    oferta: true,
    descripcion: "Estética lujosa con vetas delicadas.",
  },
];

// 🔹 Pegamentos
const pegamentos = [
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639559/pegamnto2_fjjiw5.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639557/pegamento5_bpsp0i.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento4_oizriz.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento_o6tedz.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639539/porcelanato_lgizyw.png",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639559/pegamnto2_fjjiw5.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639557/pegamento5_bpsp0i.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento4_oizriz.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento_o6tedz.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639539/porcelanato_lgizyw.png",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639559/pegamnto2_fjjiw5.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639557/pegamento5_bpsp0i.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento4_oizriz.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento_o6tedz.webp",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639539/porcelanato_lgizyw.png",
    oferta: false,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639559/pegamnto2_fjjiw5.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639557/pegamento5_bpsp0i.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento4_oizriz.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639556/pegamento_o6tedz.webp",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
  {
    nombre: "Pegamento Cerámico Flex",
    imagen:
      "https://res.cloudinary.com/dnufqavjz/image/upload/v1751639539/porcelanato_lgizyw.png",
    oferta: true,
    ambiente: "Interior",
    opcion_2: "Adhiere cerámico y porcelanato",
  },
];

// 🔄 Función para insertar cada grupo
/*async function seedCollection(name: string, data: any[]) {
  const ref = collection(db, name);
  for (const item of data) {
    await addDoc(ref, item);
    console.log(`✔️ Agregado a ${name}:`, item.nombre);
  }
}

// 🏁 Ejecutar todo
export async function seedDatabase() {
  await seedCollection("ceramicos", ceramicos);
  await seedCollection("destacadas", destacadas);
  await seedCollection("porcelanatos", porcelanatos);
  await seedCollection("pegamentos", pegamentos);
  console.log("✅ Base de datos poblada con éxito");
}
*/