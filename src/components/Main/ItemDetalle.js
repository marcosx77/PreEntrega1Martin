import React from "react";
import ItemCount from '../Main/ItemCount'

const ItemDetalle = ({item})=>{
    return (
        <div className="ItemDetalle">
            <img src={item.img} alt="imagen"/>
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <h3>$ {item.precio}</h3>
            <ItemCount stock={item.stock}/>
        </div>
    );
}

export default ItemDetalle;