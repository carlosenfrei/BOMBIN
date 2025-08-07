import { useState, useEffect } from "react";
import {doc, getDoc} from "firebase/firestore";
import db from "../db/db";


const useProducto = (productoId) => {
    const[producto, setProducto]= useState({});
    const [carga, setCarga]=useState(true);

    const getProducto = async()=>{
        try{
            const docRef = doc(db,"productos",productoId);
            const dataDb = await getDoc(docRef);
            const data ={id: dataDb.id, ...dataDb.data()};
            setProducto(data);
            setCarga(false);
        }catch(error){
            console.log(error);
        }
    }
    console.log(productoId)
    useEffect(()=>{
        getProducto();

    },[]);

    return {producto, carga};
}

export default useProducto;