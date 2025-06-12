   export const getProducts = async ()=>{
    try{ const response = await fetch('/api/get-products')
        const data = await response.json()
        console.log("respuesta del get en contexto", data);
        return data
    }
    catch(error){
        console.log(error);
        return error
    } }