import {db} from "@/firebase/config"
import {collection, getDocs} from "firebase/firestore"
import { NextResponse } from "next/server"

//importamos la bdd
//importamos esto desde firestore 
//next response fundamental para gestionar desde el servidor simulando un backend

export async function GET(){
    try{
        const snapshot = await getDocs(collection(db,"ceramicos"))
        const products = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
        }))        
        return NextResponse.json(products,{status:200})
    }catch(error){      
        console.log(error)  
        return NextResponse.json({error:"error al obtener los productos"}, {status:500})
    }
}
//esta funcion trae los datos de la bdd, y desestructura cada documento para generar un objeto que contenga el id junto a las demas propiedades ya que firebase no es relacional, por ende el id esta en el documento pero fuera del objeto que tiene las propiedades. 

