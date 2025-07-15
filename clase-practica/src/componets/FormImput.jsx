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
            <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={handleChange} />
            <button type="submit">Ingresar</button> 
        </form>
    );

};



export default FormImput;
