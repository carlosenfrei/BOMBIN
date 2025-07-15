import "./Contador.css"
import { useState } from "react"; //lo escribo entre llaves para desestrucutrar y evitar escribir React.useState
const Contador = () => {
    //let contador = 0;
    const [contador, setContador ] = useState(0);

const aumentar = ()=> {
    //contador = contador + 1;
    setContador(contador + 1);
}
const disminuir = ()=> {
    //contador = contador - 1;
    if (contador > 0){
        setContador (contador - 1);
    }
}

    return(
        <div className="contador">
            <button onClick={disminuir}>-</button>
            <p className="valor">Cantidad: {contador}</p>
            <button onClick={aumentar}>+</button>
            
        </div>
    )
}

export default Contador;
