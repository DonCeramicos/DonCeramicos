export const createSlug = (nombre: string, id: string) => {
  const slug = nombre
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, ""); // limpia caracteres raros
  return `${slug}--${id}`;
};

export const extractIdFromSlug = (slugId: string) => {
  return slugId.split("--").pop() || "";
};
