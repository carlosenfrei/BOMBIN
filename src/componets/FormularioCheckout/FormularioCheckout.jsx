import "./FormularioCheckout.css";

const FormularioCheckout =({formularioDatos, cambioInput, enviarOrden})=> {

    return(

        <form onSubmit={enviarOrden} className="checkout-form">
            <div className="checkout-form__contenedor">
                <input className="checkout-form__input" type="text" name="NombreCompleto" placeholder="Ingresa tu Nombre y Apellido" value={formularioDatos.NombreCompleto} onChange={cambioInput}/>
                <input className="checkout-form__input"type="number" name="telefono" placeholder="Ingresa tu numero de telefono" value={formularioDatos.telefono} onChange={cambioInput}/>
                <input className="checkout-form__input"type="email" name="correo"  placeholder="Ingresa tu correo electronico" value={formularioDatos.correo} onChange={cambioInput}/>
                <button className="checkout-form__boton" type="submit">Enviar orden</button>
            </div>
        </form>
    )
}

export default FormularioCheckout;