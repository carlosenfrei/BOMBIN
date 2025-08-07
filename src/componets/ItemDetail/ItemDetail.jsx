import "./ItemDetail.css"
import Contador from "../contador/Contador";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
const ItemDetail =({producto = {} }) => { //valor por defefcto vacio, por si surgeg algun problemam de inicializacion
    const {AnadirProductoAlCarrito} = useContext(CarritoContext);
    const agregarProducto = (cantidad) => {
        console.log(cantidad);
        const productoAlCarrito = {...producto, cantidad}
        console.log(productoAlCarrito);
        AnadirProductoAlCarrito(productoAlCarrito);
    }

    return (
        <div className="detalle-item">
            <div className="detalle-item__contenido">
                <div className="detalle-item__contenido-imagen">
                    <img className="detalle-item__contenido-imagen--img" src= {producto.imagen} alt= {producto.categoria}/>
                </div>
                <div className="detalle-item__texto-contenedor">
                    <p className="detalle-item__texto">Categoria: {producto.categoria}</p>
                    {
                        producto.categoria === "bombon" && (<p className="detalle-item__texto">Sabor: {producto.sabor}</p>)
                    }
                    <p className="detalle-item__texto-descripcion">{producto.descripcion}</p>
                    <p className="detalle-item__texto">Stock disponible: {producto.stock}</p>
                    <p className="detalle-item__texto" >${producto.precio}</p>
                    <div className="contador">
                        <Contador stock={producto.stock} agregarProducto ={agregarProducto}/>
                    
                    </div>
                    <div className="boton-item-contenedor">
                        <Link to ="/">
                            <p className="boton-item">Seguir comprando</p>
                        </Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default ItemDetail;