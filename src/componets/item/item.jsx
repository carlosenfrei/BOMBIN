import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return(
        <li className="item">
            <div className="img-item-conteiner">
                <img className="img-item" src={producto.imagen} alt={`Imagen de Bombon sabor ${producto.sabor}`} />
            
            </div>
            <div className="text-item">
            <p className="text-item">Categoria: <span className="text-item--valor">{producto.categoria}</span> </p>
            <p className="text-item">Sabor: <span className="text-item--valor">{producto.sabor}</span> </p>
            <p className="stock-item">Disponibles: <span className="text-item--valor--stock">{producto.stock}</span> </p>
            <Link to ={`/detalle/${producto.id}`}>
                <p className="boton-item">MÁS INFORMACIÓN</p>
            </Link>
            
            </div>
        </li>
    )
}
export default Item