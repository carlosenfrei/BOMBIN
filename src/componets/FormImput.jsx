import { useState } from "react";
const FormImput = ({ nombre, setNombre, setMostrarSaludo }) => {
    const handleChange = (event) => {
        setNombre(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() !== "") {
            setMostrarSaludo(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="checkout-form__input" type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={handleChange} />
            <button className="checkout-form__boton" type="submit">Ingresar</button> 
        </form>
    );

};



export default FormImput;
