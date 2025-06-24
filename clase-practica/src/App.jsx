import './App.css';
import NavBar from "./componets/NavBar";
import ListaContenedor from "./componets/ListaContenedor";
import Contador from "./componets/Contador"
import FormImput from "./componets/FormImput";
import { useState } from "react"; //lo escribo entre llaves para desestrucutrar y evitar escribir React.useState

function App() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  return (
      <div className="app-container">
        <NavBar/>
        <FormImput nombre={nombre} setNombre={setNombre} setMostrarSaludo={setMostrarSaludo} />
        <ListaContenedor saludo={mostrarSaludo ? `Bienvenid@ ${nombre} a la tienda virtual de Bombin`: "Bienvenid@ a la tienda virtual de Bombin"}/>
        {/*<ListaContenedor saludo = {`Bienvenid@ ${nombre} a la tienda virtual de Bombin`} />*/}
        {/*<ListaContenedor saludo = {"Bienvenid@ "+ saludo1 + " a la tienda virtual de Bombin"} />*/}
        <Contador/>
      </div>
  
  )
}

export default App