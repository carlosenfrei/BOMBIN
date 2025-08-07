import useProductos from "../hooks/useProductos.js"
import { useState } from "react";
const hocFiltroProductos = (Componente)=>{

    return function() {
        const [query, setQuery]= useState("");
        const {productos} = useProductos();

        const changeInput =(event) =>{
            setQuery(event.target.value.toLowerCase());
        }

        const buscar = (listaProductos) => {
            const filtroProductos = listaProductos.filter((producto) =>{
                return producto.categoria.toLowerCase().includes(query) || producto.sabor.toLowerCase().includes(query);
            });
            return filtroProductos;
        }
        return(
            <>
                <div>
                    <label >Busqueda por categoria o sabor </label>
                    <input type="text" placeholder="Buscar producto.." onChange={changeInput}/>
                </div>
                <Componente productos ={buscar(productos)}/>
                
            </>
        )
    }
}

export default hocFiltroProductos;