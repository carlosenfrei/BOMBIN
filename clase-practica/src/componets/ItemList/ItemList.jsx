import Item from "../item/item";
import hocFiltroProductos from "../../hoc/hocFiltroProductos";
const ItemList =({productos}) => {
    return(
        <ul className="itemm-list"> 
            {

            productos.map((producto) => (
                <Item producto= {producto} key ={producto.id}/>
            ))
            }
        </ul>
    )
}

const ListaItemConBuscar = hocFiltroProductos(ItemList);

export {ItemList, ListaItemConBuscar};
//export default ItemList
