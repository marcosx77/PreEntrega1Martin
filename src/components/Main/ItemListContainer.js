import React from "react";
import ItemList from './ItemList';
import { productos } from '../Mock/ProductosMock';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer=()=>{
    
    const [items, setItem]=useState([]);
    /* const valCategoria=useParams(); */
    const { nomCategoria }=useParams();

    useEffect(()=>{
        const ObtenerProducto= () =>{
            return new Promise ((res, rej) =>{
               const filtroProd = productos.filter((p)=> p.categoria=== nomCategoria);

                setTimeout(() => {
                    res(nomCategoria ? filtroProd : productos);
               }, 1000);     
            });
        };
        ObtenerProducto()
        .then((res)=>{
            setItem(res);
        })
        .catch(()=>{
            console.log('Devuelve un Error')
        });
    },[nomCategoria]);

    return(
        <main>
            <div className="ItemListContainer">
                <ItemList items={items}/>
            </div>
        </main>
    );
}
export default ItemListContainer;
