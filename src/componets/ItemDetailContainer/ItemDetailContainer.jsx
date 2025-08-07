import "./ItemDetailContainer.css"
import React, { useState } from "react";
import Carga from "../Carga/Carga";
import useProducto from "../../hooks/useProducto.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
const ItemDetailContainer = ()=>{
    const {productoId} = useParams();
    const {producto, carga}= useProducto(productoId);
    console.log(producto);
    return(
        <div className="item-detail-container">
            {carga ? <Carga /> : <ItemDetail producto = {producto} />}
            
        </div>
    )
}
export default ItemDetailContainer;


