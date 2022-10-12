import React, { useState } from "react";


const ItemCount = (props) =>{
    const [contador, setContador] = useState(1);
    
    const suma=() =>{
        contador < props.stock && setContador(contador + 1);
    };
    console.log(contador)

    const resta =()=> {
        contador > 1 && setContador(contador - 1);
        console.log(contador)
    };

    return(
        <div className="itemcount">
             <button  className="btn btn-secondary" onClick={suma}>+</button>
             <h3>{contador}</h3>
             <button  className="btn btn-secondary" onClick={resta}>-</button>
        </div>
    );
};

export default ItemCount;

