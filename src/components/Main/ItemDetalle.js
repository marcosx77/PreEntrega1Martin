import React, { useContext, useState } from "react";
import ItemCount from './ItemCount';
import { ContextCarrito } from "../../Context/ContextCarrito";
import { Link } from "react-router-dom";


const ItemDetalle = ({item})=>{
    const [cantidades, setCantidades] =useState(0);
    const {agregarCarrito} =useContext(ContextCarrito);

    const agregar = (nro) =>{
        setCantidades(nro);
        agregarCarrito(item, nro);
    } 

    return (
        <div className="itemdetalle">
            <img src={item.img} alt="imagen"/>
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <h3>$ {item.precio}</h3>
                <p>Stock: {item.stock}</p>
                {
                    cantidades===0 ? (
                        <ItemCount agregar={agregar} stock={item.stock}/>
                    ) : (
                        <Link to='/Carrito'>
                            Ver Carrito
                        </Link>
                    )
                }
                
            </div>
        </div>
    );
}

export default ItemDetalle;