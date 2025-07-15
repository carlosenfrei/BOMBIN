
import "./ContenedorSaludo.css"

const ContenedorSaludo = (props) => {
    
    return(
        <div className="contenedor--ListaContenedor">
        <h2>{props.saludo}</h2>
        </div>

    )
}
export default ContenedorSaludo;