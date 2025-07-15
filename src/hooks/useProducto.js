import { useEffect, useState } from "react"
import { getProductById } from "../componets/data/productos.js";

const useProducto =(productoId)=>{
    const [producto, setProducto] =useState({}); //ya que ñp qiue se recibira es un objeto pol el find que se uso
    const [carga, setCarga] =useState(true);

    useEffect(()=> {
        getProductById(productoId) //definido de forma manual pero se puede definir de otra manera
            .then((data)=> {
                setProducto(data || {});
            })
            .finally(()=>{
                setCarga(false);
            })
    }, []);
    return {producto, carga};
};

export default useProducto;