import "./ListaContenedor.css"
import {getProductos} from "../data/productos.js";
import { useEffect } from "react";
import {ItemList} from "../ItemList/ItemList";
import Carga from "../Carga/Carga"
import useProductos from "../../hooks/useProductos.js";
import { useParams } from "react-router-dom";

const ListaContenedor = (props) => {

    const {categoria}=useParams();
    const{productos, carga} = useProductos(categoria);
    console.log()
    
    
    return(
        <div>
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