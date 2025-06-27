import { NextResponse } from "next/server"
import {db} from "@/firebase/config"
import {collection, getDocs} from "firebase/firestore"

export async function GET(){
    try{
        const snapshot = await getDocs(collection(db,"pegamentos"))
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