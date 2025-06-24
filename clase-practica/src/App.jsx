import './App.css';
import NavBar from "./componets/NavBar";
import ListaContenedor from "./componets/ListaContenedor";
import Contador from "./componets/Contador"
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      setMostrarSaludo(true);
    }
  };



  return (
      <div className="app-container">
        <NavBar/>
        <form onSubmit={manejarSubmit}>
          <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={manejarCambio}/>
          <button type="submit">Ingresar</button>
        </form>
        <ListaContenedor saludo={mostrarSaludo ? `Bienvenid@ ${nombre} a la tienda virtual de Bombin`: "Bienvenid@ a la tienda virtual de Bombin"}/>
        {/*<ListaContenedor saludo = {`Bienvenid@ ${nombre} a la tienda virtual de Bombin`} />*/}
        {/*<ListaContenedor saludo = {"Bienvenid@ "+ saludo1 + " a la tienda virtual de Bombin"} />*/}
        <Contador/>
      </div>
  
  )
}

export default App
