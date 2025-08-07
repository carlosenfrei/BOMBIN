//LA idea de este momdulo es crear un barra de navegacion
import "./NavBar.css"
import logoBombin from "../../assets/logo.jpg"
import Carrito from "../carrito/Carrito";
import { Link } from "react-router-dom"; //se emplea para navegar internamente si quiero ir papginas externas usar href
const NavBar = () => {

    return (
        <div className = "navbar">
            <Link to = "/">
                <img className= "logo" src={logoBombin} alt="Logo de Bombin" />
            </Link>
            
            <ul className= "categorias">
                <li className="categoria">
                    <Link to ="/categoria/bombon">Bombones</Link>
                </li>
                <li className="categoria">
                    <Link to ="/categoria/regalo">Regalos</Link>
                </li>
                <li className="categoria">
                    <Link to ="/categoria/tableta">Tabletas</Link>
                </li>
            </ul>
            <Carrito/>
        </div>
    )
}
export default NavBar;
//<Link to ="/categoria/chocolate">Chocolate</Link> no se pone el punto para que no cocatene