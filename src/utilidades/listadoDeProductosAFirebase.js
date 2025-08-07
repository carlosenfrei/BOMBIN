import db from "../db/db.js";
import {addDoc, collection} from "firebase/firestore"

const productos = [
    {
        id: 1,
        categoria: "bombon",
        sabor: "frambuesa",
        descripcion: "Bombon de vanguardia artesanal relleno de ganache frambuesa",
        stock: 50,
        imagen: "/img/frambuesa.jpg",
        precio: 1800,
    },
    {
    id: 2,
    categoria: "bombon",
    sabor: "frutos del bosque",
    descripcion: "Bombon de vanguardia artesanal relleno de ganache de frutos del bosque",
    stock: 50,
    imagen: "/img/frutosbosque.jpg",
    precio: 1800,
    },
    {
    id: 3,
    categoria: "bombon",
    sabor: "ddl con rhon",
    descripcion: "Bombon de vanguardia artesanal relleno de ddl con rhon",
    stock: 50,
    imagen: "/img/ddlron.jpg",
    precio: 1800,
    },
    {
    id: 4,
    categoria: "bombon",
    sabor: "pasta de avellana y chocolate",
    descripcion: "Bombon de vanguardia artesanal relleno de pasta de avellana y chocolate",
    stock: 50,
    imagen: "/img/nutella.jpg",
    precio: 1800,
    },
    {
    id: 5,
    categoria: "bombon",
    sabor: "mojito",
    descripcion: "Bombon de vanguardia artesanal relleno de reduccion de monjito, apto vegano",
    stock: 50,
    imagen: "/img/mojito.jpg",
    precio: 1800,
    },
    {
    id: 6,
    categoria: "bombon",
    sabor: "malbec",
    descripcion: "Bombon de vanguardia artesanal relleno de reduccion de malbec, apto vegano y celiaco",
    stock: 50,
    imagen: "/img/malbec.jpg",
    precio: 1800,
    },
    {
    id: 7,
    categoria: "bombon",
    sabor: "chocolate",
    descripcion: "Bombon de vanguardia artesanal relleno de ganache de chocolate",
    stock: 50,
    imagen: "/img/chocolate.jpg",
    precio: 1800,
    },
    {
    id: 8,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de 3 bombones de vanguardia artesanales relleno Crema de avellana y cacao, ddl, chocolate",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 5000,
    },
    {
    id: 9,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de 6 bombones de vanguardia artesanales relleno de Frambuesa, Crema de avellana y cacao, ddl con nuez, malbec, ddl, sorpresa",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 8500,
    },
    {
    id: 10,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de 12 bombones de vanguardia artesanales relleno de Frambuesa, Crema de avellana y cacao, ddl con nuez, malbec, ddl, sorpresa",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 16600,
    },
    {
    id: 11,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de 24 bombones de vanguardia artesanales relleno de Frambuesa, Crema de avellana y cacao, ddl con nuez, malbec, ddl, sorpresa",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 29800,
    },
    {
    id: 12,
    categoria: "regalo" ,
    sabor: "surtido",
    descripcion: "Mix de 9 bombones de vanguardia artesanales relleno de Frambuesa, Crema de avellana y cacao, ddl con nuez, malbec, ddl, sorpresa",
    stock: 25,
    imagen: "/img/bombones3.jpg",
    precio: 13100,
    },
    {
    id: 13,
    categoria: "bombon" ,
    sabor: "pistacho",
    descripcion: "Bombon de vanguardia artesanal relleno de reduccion de pistacho",
    stock: 25,
    imagen: "/img/pistacho.jpg",
    precio: 1800,
    },
]

const listadoDeProductosAFirebase = () => {
    const productosRef = collection(db, "productos")
        productos.map (({id, ...datosProductos}) => {
            addDoc(productosRef, datosProductos);
        })
        console.log("productos subidos");
        return
}

listadoDeProductosAFirebase();