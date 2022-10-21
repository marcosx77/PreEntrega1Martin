import React, { useContext, useState } from "react";
import ItemCount from './ItemCount';
import { ContextCarrito } from "../../Context/ContextCarrito";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetalle = ({item})=>{
    const {agregarCarrito, cantPordCarrito} =useContext(ContextCarrito);
    const [cantidades, setCantidades] =useState(0);


    const agregar = (nro) =>{
        setCantidades(nro);
        agregarCarrito(item, nro);
        showToastMessage(item, nro);
    } 

    const showToastMessage = (item, nro, delay = 500) => {
        toast.success(`Se agrego ${item.titulo} x ${nro}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: delay,
            hideProgressBar:false,
            pauseOnHover: true
        });
    };
    
    const cantidadInicial=cantPordCarrito(item.id);
    return (
        <div className="itemdetalle">
            <ToastContainer/>
            <img src={item.img} alt="imagen"/>
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <h3>$ {item.precio}</h3>
                <p>Stock: {item.stock}</p>
                {
                    cantidades===0 ? (
                        <ItemCount agregar={agregar} stock={item.stock} inicial={cantidadInicial}/>
                    ) : (
                        <Link to='/Carrito'><button className="btn btn-secondary btncarrito">Terminar mi compra</button></Link>
                        
                    )
                }
            </div>
        </div>
    );
}

export default ItemDetalle;