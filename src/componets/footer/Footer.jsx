import "./Footer.css"
import logoBombin from "../../assets/logo.jpg"
import { Link } from "react-router-dom"; //se emplea para navegar internamente si quiero ir papginas externas usar href
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
const Footer = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    return (
        <div className = "footer">
            <div className="footer-arriba">
            
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
                        <li className="categoria">
                            <Link to="/CarritoDetalle" className="canasto">                
                                    <p className="accesoCarrito">Acceso al carrito {cantidadTotal()}</p>
                                </Link>
                        </li>
                    </ul>
                    <Link to = "/">
                        <img className= "logo" src={logoBombin} alt="Logo de Bombin" />
                    </Link>
            </div>
                    <div className="footer-texto">
                        <p>Bombin sabores con estilo es un proyecto una empres de carlosenfrei -2024</p>
                        <p>Sitio e-commerce desarrollado por Carlos Enrique Freixas</p> 
                    </div>
                    
            
        </div>
    )
}
export default Footer;
