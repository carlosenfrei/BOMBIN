import './App.css';
import NavBar from "./componets/navBar/NavBar";
import ContenedorSaludo from "./componets/ContenedorSaludo/ContenedorSaludo";
import FormImput from "./componets/FormImput";
import ListaContenedor from './componets/ListaContenedor/ListaContenedor';
import { ListaItemConBuscar } from './componets/ItemList/ItemList';
import { useState } from "react"; //lo escribo entre llaves para desestrucutrar y evitar escribir React.useState
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import CarritoDetalle from './componets/CarritoDetalle/CarritoDetalle';
import Checkout from './componets/Checkout/Checkout';
import AgregarProducto from './componets/AgregarProducto/AgregarProducto';
import Footer from './componets/footer/Footer';
function App() {
  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  return (
    <BrowserRouter>
      <CarritoProvider>
        <div className="app-container">
          <NavBar/>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <FormImput nombre={nombre} setNombre={setNombre} setMostrarSaludo={setMostrarSaludo} />
                  <ContenedorSaludo saludo={mostrarSaludo ? `Bienvenid@ ${nombre} a la tienda virtual de Bombin` : "Bienvenid@ a la tienda virtual de Bombin"} />
                  {nombre.toLowerCase() === "admin" && <AgregarProducto />}
                  <ListaItemConBuscar />
                  
                </>
              } 
            />
            
            <Route path='/categoria/:categoria' element={<ListaContenedor />}/>
            <Route path='/detalle/:productoId' element={<ItemDetailContainer />}/>
            <Route path='/CarritoDetalle' element={<CarritoDetalle />}/>
            <Route path='/Checkout' element={<Checkout />}/>
            <Route path="*" element={<div>Error 404</div>}/>
          </Routes>
          <Footer />
        </div>
      </CarritoProvider>
    </BrowserRouter>

  )
}

export default App