import React , { useState , useEffect } from "react";
import { productos } from '../Mock/ProductosMock';
import ItemDetalle from '../Main/ItemDetalle'

const ItemDetailContainer= ()=>{
    const [ItemDet, setItemDet]=useState({});

    useEffect(()=>{
        const DetalleProducto=() =>{
            return new Promise((res, rej)=>{
                const prod= productos.find((p)=>p.id===2)

                setTimeout(() => {
                    res(prod);
                }, 2000);
            })
        };
        DetalleProducto()
        .then((res)=>{
            setItemDet(res);        
        })
        .catch(()=>{
            console.log('Error')
        })
    },[]);

    return (
        <ItemDetalle item={ItemDet} key={ItemDet.id}/>
    );
}

export default ItemDetailContainer;
