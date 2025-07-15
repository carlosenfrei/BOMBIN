import "./item.css";
import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return(
        <li className="item">
            <div className="img-item-conteiner">
                <img className="img-item" src={producto.imagen} alt="Bombon" />
            
            </div>
            <div className="text-item">
            <p className="text-item">{producto.categoria} </p>
            <p className="text-item">{producto.sabor} </p>
            <p className="stock-item">Disponibles: {producto.stock} </p>
            <p className="precio-item">$ {producto.stock} </p>
            {producto.stock > 0 ? <button>Comprar</button>: <p>Sin stock</p>}
            <Link to ={`/detalle/ ${producto.id}`}>
                <p className="boton-item">MÁS INFORMACIÓN</p>
            </Link>
            
            </div>
        </li>
    )
}
export default Item