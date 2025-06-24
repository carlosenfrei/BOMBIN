//LA idea de este momdulo es crear un barra de navegacion
import "./NavBar.css"
import logoBombin from "../assets/logo.jpg"
import Carrito from "./Carrito";
const NavBar = () => {

    return (
        <div className = "navbar">
            <img className= "logo" src={logoBombin} alt="Logo de Bombin" />
            <ul className= "categorias">
                <li>Chocolate</li>
                <li>Bombones</li>
                <li>Sobre Bombin</li>
            </ul>
            <Carrito/>
        </div>
    )
}
export default NavBar;