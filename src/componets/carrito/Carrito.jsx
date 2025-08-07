//La idea de este componente es mostrar un carrito de compras
import "./Carrito.css"
import canastoBombin from "../../assets/canastoBombin.jpg";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
const Carrito = () => {
    const {cantidadTotal} = useContext(CarritoContext);

    return(
        <Link to="/CarritoDetalle" className="canasto">
            <img className="canastoBombin" src={canastoBombin} alt="canasto de compras" />
            <h2>{cantidadTotal()}</h2> 
        </Link>
    )
}
export default Carrito;