import React, { useState } from "react";


const ItemCount = ({agregar, stock, inicial=1}) =>{
    const [contador, setContador] = useState(inicial);
    /* const {agregar}=props; */

    const suma=() =>{
        contador < stock && setContador(contador + 1);
    };

    const resta =()=> {
        contador > 1 && setContador(contador - 1);
    };

    const agrega=() =>{
        agregar(contador);
    };

    
    return(
        <>
        <div className="itemcount">
             <button  className="btn btn-secondary" onClick={suma}>+</button>
             <h3>{contador}</h3>
             <button  className="btn btn-secondary" onClick={resta}>-</button>
        </div>
        <div>
            <button  onClick={agrega} className="btn btn-secondary btncarrito">Agregar al Carrito</button>
        </div>
        </>
        
        
    );
};

export default ItemCount;

