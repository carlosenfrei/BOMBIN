import { useState, useEffect } from "react";
import {getProductos} from "../componets/data/productos.js"
const useProductos = (categoria) => {
    const[productos, setProductos]= useState([]);
    const [carga, setCarga]=useState(true);
    console.log(categoria)
    useEffect(()=>{
        setCarga(true);
        getProductos()
            .then((data) => {
                if(categoria){
                    //filtar la data por categoria
                    const productosFiltrados = data.filter((producto)=> producto.categoria.toLowerCase() === categoria.toLowerCase())
                    setProductos(productosFiltrados);
                }else{
                    setProductos(data);
                }
            })
            .finally(()=>{
                setCarga(false);
            })

    },[categoria]);

    return {productos, carga};
}

export default useProductos;