import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db.js";

const useProductos = (categoria) => {
    const[productos, setProductos]= useState([]);
    const [carga, setCarga]=useState(true);

    const getProductos = async()=>{
        try{
            const dataDb = await getDocs(collection(db,"productos"));
            console.log(dataDb);
            const data = dataDb.docs.map((productoDb) =>{
                return{id: productoDb.id, ...productoDb.data()}
            })

            setProductos(data);
            setCarga(false);
        }catch (error){
            console.log(error)
        }
    }

    const getProductosPorCategoria = async() =>{
        try{
            const consulta = query(collection(db, "productos"), where("categoria", "==", categoria));
            const dataDb =await getDocs(consulta);
            const data = dataDb.docs.map((productoDb) =>{
                return{id: productoDb.id, ...productoDb.data()}
            })
            setProductos(data);
            setCarga(false);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if (categoria){
            getProductosPorCategoria();
        }else {
            getProductos();
        }
        

    },[categoria]);

    return {productos, carga};
}

export default useProductos;