import { createContext, useState } from "react";

//creacion del contexto para el carrito
const CarritoContext = createContext();

const CarritoProvider = ({children})=> {
    const [carrito, setCarrito]= useState([]);

    const AnadirProductoAlCarrito =(producto)=>{

        const productoExistente = carrito.find((prod) => prod.id === producto.id);

        if (productoExistente) {
        // Sumo la cantidad al producto ya existente
        const carritoActualizado = carrito.map(prod => {
            if (prod.id === productoExistente.id) {
                return { ...prod, cantidad: prod.cantidad + producto.cantidad };
            }
            return prod;
        });
        setCarrito(carritoActualizado);
    } else {
        setCarrito([...carrito, producto]);
    }
        
    }

    const cantidadTotal = () => {
        const total = carrito.reduce((total, producto)=> total + producto.cantidad, 0)
        return total;
    }

    const precioTotal = () => {
        const total = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad),0)
        return total;
    }

    const borrarProductoCarritoPorId = (id) =>{
        const productosFiltrados = carrito.filter((producto)=> producto.id !== id);
        setCarrito(productosFiltrados);
    }

    const borrarProductosCarrito = () =>{
        setCarrito([]);
    }
    console.log(carrito);
    return (
        <CarritoContext.Provider value={{carrito, AnadirProductoAlCarrito, cantidadTotal, precioTotal, borrarProductoCarritoPorId, borrarProductosCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

export {CarritoContext, CarritoProvider}