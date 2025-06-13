import { Product_Card } from '../Product_Card'
import { useContext } from 'react'
import { ContextApp } from '../../context/context'
import { ICeramicos } from '../../context/context'

export const ProductList = () => {
    const { ceramicos } = useContext(ContextApp);
    console.log(ceramicos);

    return (
        <div className='bg-amber-950 flex flex-wrap'>
            <h1>ProductList</h1>
            {ceramicos.map((ceramico: ICeramicos) => (
                <Product_Card ceramico={ceramico} key={ceramico.id} />
                
            ))}
        </div>
    )
}