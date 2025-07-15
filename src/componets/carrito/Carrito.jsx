//La idea de este componente es mostrar un carrito de compras
import "./Carrito.css"
import canastoBombin from "../../assets/canastoBombin.jpg";
const Carrito = () => {
    return(
        <div className="canasto">
            <img className="canastoBombin" src={canastoBombin} alt="canasto de compras" />
            <h2>5</h2> 
        </div>
    )
}
export default Carrito;