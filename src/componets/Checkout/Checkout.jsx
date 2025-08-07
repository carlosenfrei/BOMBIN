import "./Checkout.css";
import Contacto from "../Contacto/Contacto";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import  FormularioCheckout from "../FormularioCheckout/FormularioCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import { useNavigate } from "react-router-dom";
import { DescargarPDF } from "../GeneraPDF/GeneraPDF";

const Checkout =()=>{
    const [formularioDatos, setFormularioDatos]= useState({
        NombreCompleto: "",
        telefono: "",
        correo:"",
    })
    const [pedidoId, setPedidoId] = useState(null);
    const {carrito, precioTotal, borrarProductosCarrito} = useContext(CarritoContext);
    const navegacion = useNavigate();
    const cambioInput = (event)=> {
        setFormularioDatos({...formularioDatos, [event.target.name]: event.target.value })

    }
    const enviarOrden = (event)=>{
        event.preventDefault();
        console.log(formularioDatos);
        const pedido ={
            comprador: {...formularioDatos},
            productos: carrito,
            totalAbonar: precioTotal(),
        }
        subirOrden(pedido);
    }

    const subirOrden = async (pedido)=>{
        try{
            const pedidoRef = collection(db, "pedidos");
            const respuesta = await addDoc(pedidoRef, pedido);
            setPedidoId(respuesta.id);
            console.log(respuesta.id);
            await Contacto(pedido, respuesta.id);
        }catch(error){
            console.log("error al subir la orden", error);
        }
    }

    const volverAlinicio =()=>{
        navegacion("/");
        setTimeout(() => {
            borrarProductosCarrito();
        }, 500); 
        
    }

        
    return(
        <div className="checkout">
            {
                pedidoId ? (<div className="checkout--contenedor">
                    <h2>Pedido generado correctamente el pedido {pedidoId}</h2>
                    <p>Se le enviara un enlace de pago correo electronico {formularioDatos.correo}</p>
                    <p>GRACIAS POR ELEGIRNOS Y TU COMPRA</p>
                    <DescargarPDF pedidoId={pedidoId}/>
                    <button onClick={volverAlinicio}>Volver al inicio</button>
                    
                </div>
                ) :(
                    <FormularioCheckout formularioDatos={formularioDatos} cambioInput={cambioInput}  enviarOrden={enviarOrden}/>
                    
                )
            }
        </div>
    )

}

export default Checkout;