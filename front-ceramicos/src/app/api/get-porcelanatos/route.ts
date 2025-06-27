import {db} from "@/firebase/config"
import {collection, getDocs} from "firebase/firestore"
import { NextResponse } from "next/server"

//importamos la bdd
//importamos esto desde firestore 
//next response fundamental para gestionar desde el servidor simulando un backend

export async function GET(){
    try{
        const snapshot = await getDocs(collection(db,"porcelanatos"))
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