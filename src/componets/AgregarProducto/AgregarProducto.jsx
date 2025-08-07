import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";

const AgregarProducto = () => {
    const [producto, setProducto] = useState({
        categoria: "",
        sabor: "",
        descripcion: "",
        stock: "",
        imagen: "",
        precio: "",
    });

    const [productoId, setProductoId] = useState(null);

    const cambioInput = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.value
        });
    };

    const enviarProducto = async (event) => {
        event.preventDefault();
        try {
            const productoData = {
                ...producto,
                stock: Number(producto.stock),
                precio: Number(producto.precio)
            };
            const productosRef = collection(db, "productos");
            const respuesta = await addDoc(productosRef, productoData);
            setProductoId(respuesta.id);
            console.log("Producto agregado con ID:", respuesta.id);
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };
    return (
        <div className="agregar-producto">
            {productoId ? (
                <div>
                    <h2>Producto agregado correctamente</h2>
                    <p>ID del nuevo producto: {productoId}</p>
                </div>
            ) : (
                <form onSubmit={enviarProducto} className="checkout-form">
                    <div className="checkout-form__contenedor">
                        <input className="checkout-form__input" type="text" name="categoria" placeholder="Categoría" value={producto.categoria} onChange={cambioInput} />
                        <input className="checkout-form__input" type="text" name="sabor" placeholder="Sabor" value={producto.sabor} onChange={cambioInput} />
                        <input className="checkout-form__input" type="text" name="descripcion" placeholder="Descripción" value={producto.descripcion} onChange={cambioInput} />
                        <input className="checkout-form__input" type="number" name="stock" placeholder="Stock" value={producto.stock} onChange={cambioInput} />
                        <input className="checkout-form__input" type="text" name="imagen" placeholder="Ruta imagen" value={producto.imagen} onChange={cambioInput} />
                        <input className="checkout-form__input" type="number" name="precio" placeholder="Precio" value={producto.precio} onChange={cambioInput} />
                        <button type="submit">Agregar producto</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AgregarProducto;