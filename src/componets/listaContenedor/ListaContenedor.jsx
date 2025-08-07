import "./ListaContenedor.css"


import {ItemList} from "../ItemList/ItemList";
import Carga from "../Carga/Carga"
import useProductos from "../../hooks/useProductos.js";
import { useParams } from "react-router-dom";

const ListaContenedor = (props) => {

    const {categoria}=useParams();
    const{productos, carga} = useProductos(categoria);
    console.log()
    
    
    return(
        <div className="page-center">
            {carga ? <Carga /> : <ItemList productos={productos}/>}    
            
        
        </div>

    )
}
export default ListaContenedor;

/*
useEffect(()=> {
        getProductos()
            .then((data) => {
                setProductos(data);
                console.table(data);
            })
    }, [])
*/