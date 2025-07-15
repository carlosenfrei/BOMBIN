import './App.css';
import NavBar from "./componets/navBar/NavBar";
import ContenedorSaludo from "./componets/ContenedorSaludo/ContenedorSaludo";
import Contador from "./componets/contador/Contador"
import FormImput from "./componets/FormImput";
import ListaContenedor from './componets/ListaContenedor/ListaContenedor';
import { ListaItemConBuscar } from './componets/ItemList/ItemList';
import { useState } from "react"; //lo escribo entre llaves para desestrucutrar y evitar escribir React.useState
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar/>
        <FormImput nombre={nombre} setNombre={setNombre} setMostrarSaludo={setMostrarSaludo} />
        <ContenedorSaludo saludo={mostrarSaludo ? `Bienvenid@ ${nombre} a la tienda virtual de Bombin`: "Bienvenid@ a la tienda virtual de Bombin"}/>
        <ListaItemConBuscar/>
        <Routes>
          <Route path='/' element={<ListaContenedor />}/>
          <Route path='/categoria/:categoria' element={<ListaContenedor />}/>
          <Route path='/detalle/:productoId' element={<ItemDetailContainer />}/>
          
        </Routes>
      </div>
    </BrowserRouter>

  )
}

//          
//          <Contador/>
export default App