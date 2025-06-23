import type { Metadata } from "next";
import ProductDetail from "./productDetail";
import { ICeramicos } from "@/context/context";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



export async function generateMetadata(
  { params }: any
): Promise<Metadata> {
  const id = params.id;
  const res = await fetch(`${baseUrl}/api/get-products`, {
    cache: "no-store",
  });

  const allProducts: ICeramicos[] = await res.json();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Producto no encontrado | Don Cerámicos",
      description: "Producto no disponible",
    };
  }

  return {
    title: `${product.nombre} | Don Cerámicos`,
    description: product.descripcion || "Cerámicos de alta calidad",
    keywords: [`cerámicos`, product.nombre, product.categoria].join(", "),
    openGraph: {
      title: `${product.nombre} | Don Cerámicos`,
      description: product.descripcion,
      images: [product.imagen[0] || "/favicon/favicon-96x96.png"],
      url: `https://donceramicos.com/detailItem/${product.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nombre} | Don Cerámicos`,
      description: product.descripcion,
      images: [product.imagen[0] || "/favicon/favicon-96x96.png"],
    },
  };
}

export default function Page(props:any) {
  return <ProductDetail id={props.params.id} />;
}
