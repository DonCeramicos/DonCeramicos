
export const getProducts = async () => {
  try {
    const response = await fetch("/api/get-products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getDestacados = async () => {
  try {
    const response = await fetch("/api/get-destacados");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}; 

export const getPorcelanatos = async () => {
  try {
    const response = await fetch("/api/get-porcelanatos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPegamentos = async () => {
  try {
    const response = await fetch("/api/get-pegamentos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};