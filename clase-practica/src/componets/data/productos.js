const productos = [
    {
        id: 1,
        categoria: "bombon",
        sabor: "frambuesa",
        descripcion: "Bombon de vanguardia artesanal relleno de ganache frambuesa",
        stock: 200,
        imagen: "/img/bombon1.jpg",
        precio: 1800,
    },
    {
    id: 2,
    categoria: "bombon",
    sabor: "frutos del bosque",
    descripcion: "Bombon de vanguardia artesanal relleno de ganache de frutos del bosque",
    stock: 200,
    imagen: "/img/bombon1.jpg",
    precio: 1800,
    },
    {
    id: 3,
    categoria: "bombon",
    sabor: "ddl con rhon",
    descripcion: "Bombon de vanguardia artesanal relleno de ddl con rhon",
    stock: 200,
    imagen: "/img/bombon1.jpg",
    precio: 1800,
    },
    {
    id: 4,
    categoria: "bombon",
    sabor: "pasta de avellana y chocolate",
    descripcion: "Bombon de vanguardia artesanal relleno de pasta de avellana y chocolate",
    stock: 200,
    imagen: "/img/bombones.jpg",
    precio: 1800,
    },
    {
    id: 5,
    categoria: "chocolate",
    sabor: "mojito",
    descripcion: "Bombon de vanguardia artesanal relleno de reduccion de monjito, apto vegano",
    stock: 200,
    imagen: "/img/bombones.jpg",
    precio: 1800,
    },
    {
    id: 6,
    categoria: "chocolate",
    sabor: "malbec",
    descripcion: "Bombon de vanguardia artesanal relleno de reduccion de malbec, apto vegano y celiaco",
    stock: 200,
    imagen: "/img/bombones.jpg",
    precio: 1800,
    },
    {
    id: 7,
    categoria: "chocolate",
    sabor: "chocolate",
    descripcion: "Bombon de vanguardia artesanal relleno de ganache de chocolate",
    stock: 200,
    imagen: "/img/bombones3.jpg",
    precio: 1800,
    },
    {
    id: 8,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de bombones de vanguardia artesanales relleno Crema de avellana y cacao, ddl, chocolate",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 35000,
    },
    {
    id: 9,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de bombones de vanguardia artesanales relleno de Frambuesa, Crema de avellana y cacao, ddl con nuez, malbec, ddl, sorpresa",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 45000,
    },

]

const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 4000);
    })
}

const getProductById =(productoId)=>{
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //FILTADO DE LA LISTA DE PRODUCTOS Y TRAER SOLO UNO POR SU ID
            const producto = productos.find((producto)=> producto.id === parseInt(productoId));
            resolve(producto); 
        }, 4000);
    })
}
export  {getProductos,getProductById};