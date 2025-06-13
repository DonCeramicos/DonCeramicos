import { ICeramicos } from "@/context/context"
import Image from "next/image"

export const Product_Card = ({ceramico} : {ceramico: ICeramicos}) => {
    return (
        <div className=" h-60 w-40 bg-fuchsia-950 border" key={ceramico.id}>
            <Image src={ceramico.imagen} alt={ceramico.nombre} width={100} height={100} className="object-cover"/>
            <div>
                  <p className="font-bold text-amber-50">nombre: {ceramico.nombre}</p>
                  <p className="font-bold text-amber-50">{ceramico.valor}</p>
                  <p className="font-bold text-amber-50">{ceramico.dimensiones}</p>
            </div>

        </div>
    )
}