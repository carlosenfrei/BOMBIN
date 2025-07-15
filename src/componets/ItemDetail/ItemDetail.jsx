

const ItemDetail =({producto = {} }) => { //valor por defefcto vacio, por si surgeg algun problemam de inicializacion
    return (
        <div>
            <img src= {producto.imagen} alt= {producto.categoria}/> 
            <p>{producto.id}</p>
            <p>{producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
        </div>
    )
}
export default ItemDetail;