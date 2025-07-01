import type { Metadata } from "next";
import ProductDetail from "./productDetail";
import { ICeramicos, Iporcelanatos } from "@/types";
import { extractIdFromSlug } from "@/utils/slugs";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



export async function generateMetadata({ params }: any): Promise<Metadata> {
  const id = extractIdFromSlug(params.slugId);

  const res = await fetch(`${baseUrl}/api/get-products`, { cache: "no-store" });
  const allProducts: (ICeramicos | Iporcelanatos)[] = await res.json();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Producto no encontrado | Don Cerámicos",
      description: "Producto no disponible",
    };
  }

  return {
    title: `${product.nombre} | Don Cerámicos`,
    description: product.descripcion || "Cerámicos y porcelanatos de calidad",
    keywords: [product.nombre, "cerámicos", "porcelanatos"].join(", "),
    openGraph: {
      title: `${product.nombre} | Don Cerámicos`,
      description: product.descripcion,
      images: [product.imagen[0] || "/favicon/favicon-96x96.png"],
      url: `https://www.donceramicos.com.ar/detalle/${params.slugId}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nombre} | Don Cerámicos`,
      description: product.descripcion,
      images: [product.imagen[0] || "/favicon/favicon-96x96.png"],
    },
  };
}

export default function Page({ params }: any) {
  const id = extractIdFromSlug(params.slugId);
  return <ProductDetail id={id} />;
}