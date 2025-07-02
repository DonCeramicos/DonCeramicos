// src/helpers/getProductsDirect.ts
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const getProductsDirect = async () => {
  try {
    const snapshot = await getDocs(collection(db, "ceramicos"));
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error al obtener productos desde Firebase:", error);
    return []; // <- devolvemos array vacío para evitar fallos en el sitemap
  }
};
