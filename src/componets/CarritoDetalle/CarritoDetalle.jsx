import "./CarritoDetalle.css"

import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
const CarritoDetalle =()=>{
    const {carrito, precioTotal, borrarProductoCarritoPorId, borrarProductosCarrito} = useContext(CarritoContext);
    if (carrito.length === 0){
        return(
            <div className="carrito-vacio">
                <h2>El carrito está vacío</h2>
                <Link to ="/" className="boton-volver">Volver al inicio</Link>
            </div>
        )
    }
    return (
        <div className="carrito-detalle">
            <h2>Dentro del carrito de compras</h2>
            <div className="carrito-encabezado">
                <span>Imagen</span>
                <span>Producto</span>
                <span>Cantidad</span>
                <span>$/u</span>
                <span>Total</span>
                <span>Eliminar</span>
            </div>
            <div className="carrito-lista">
                {carrito.map((productoCarrito)=>(
                    <div  key={productoCarrito.id} className="carrito-item">
                        <img src={productoCarrito.imagen} alt={`Imagen de Bombon sabor ${productoCarrito.sabor}`} />
                        <p>{productoCarrito.categoria} - {productoCarrito.sabor}</p>
                        <p>{productoCarrito.cantidad}</p>
                        <p>${productoCarrito.precio}</p>
                        <p>${productoCarrito.precio * productoCarrito.cantidad}</p>
                        <button onClick= {() => borrarProductoCarritoPorId(productoCarrito.id)}><FaRegTrashCan /></button>
                    </div>))
            
                }
            </div>
            
            <div className="contenedor--precioTotal">
                <p>Precio total: ${precioTotal()}</p>
            </div>
            <div className="carrito-footer">
                <button className="boton-item" onClick= {() => borrarProductosCarrito()}><FaRegTrashCan /></button>
                <Link to="/"><p className="boton-item">Seguir comprando</p></Link>
                <Link to="/checkout"><p className="boton-item-comprar">Continuar con la compra</p></Link>
            </div>
            
        </div>
    )
}

export default CarritoDetalle;