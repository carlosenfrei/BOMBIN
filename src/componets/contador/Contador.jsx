import "./Contador.css"
import { useState } from "react"; //lo escribo entre llaves para desestrucutrar y evitar escribir React.useState
const Contador = ({stock, agregarProducto}) => {
    //let contador = 0;
    const [contador, setContador ] = useState(1);

const handleClickAumentar = ()=> {
    //contador = contador + 1;
    if (contador < stock){
        setContador(contador + 1);
    }
}
const handleClickDisminuir = ()=> {
    //contador = contador - 1;
    if (contador > 1){
        setContador (contador - 1);
    }
}

    return(
        <div className="contador">
            <button onClick={handleClickDisminuir}>-</button>
            <p className="valor">Cantidad: {contador}</p>
            <button onClick={handleClickAumentar}>+</button>
            {stock > 0 ? <button onClick={() => agregarProducto(contador)}>Añadir al carrito</button>: <p>Sin stock</p>}
            
            
        </div>
    )
}

export default Contador;
