import React , { useState , useEffect } from "react";
import { productos } from '../Mock/ProductosMock';
import ItemDetalle from './ItemDetalle';
import { useParams } from 'react-router-dom';

const ItemDetailContainer= ()=>{
    const [itemDet, setItemDet]=useState({});
    const { id } = useParams();

    useEffect(()=>{
        const DetalleProducto=() =>{
            return new Promise((res, rej)=>{
                const prod= productos.find((p)=>p.id===Number(id));

                setTimeout(() => {
                    res(prod);
                }, 500);
            })
        };
        DetalleProducto()
        .then((res)=>{
            setItemDet(res);        
        })
        .catch(()=>{
            console.log('Error')
        })
    },[id]);

    return (
        <div className="itemlistcontainer">
            <ItemDetalle item={itemDet}/>
        </div>
    );
}

export default ItemDetailContainer;
