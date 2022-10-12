import React from "react";
import ItemCount from './ItemCount';

const ItemDetalle = ({item})=>{
    return (
        <div className="itemdetalle">
            <img src={item.img} alt="imagen"/>
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <h3>$ {item.precio}</h3>
                <p>Stock: {item.stock}</p>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    );
}

export default ItemDetalle;