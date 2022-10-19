import React from "react";
import ItemList from './ItemList';
import { productos } from '../../Mock/ProductosMock';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoonLoader from 'react-spinners/MoonLoader';

const ItemListContainer=()=>{
    
    const [items, setItem]=useState([]);
    const [loading, setLoading] = useState(true);
    const { nomCategoria }=useParams();

    useEffect(()=>{
        const ObtenerProducto= () =>{
            return new Promise ((res, rej) =>{
               const filtroProd = productos.filter((p)=> p.categoria=== nomCategoria);

                setTimeout(() => {
                    res(nomCategoria ? filtroProd : productos);
               }, 1500);     
            });
        };
        ObtenerProducto()
        .then((res)=>{
            setItem(res);
        })
        .catch(()=>{
            console.log('Devuelve un Error')
        })
        .finally(() => {
            setLoading(false);
        });

        return () => setLoading(true);
    },[nomCategoria]);

    if (loading) {
        return (
            <div className="Cargando">
                <MoonLoader className="CargandoSpinner"
                    color="#000000"
                    cssOverride={null}
                    speedMultiplier={1}
                />
            </div>
        );
    }

    return(
        <main>
            <div className="itemlistcontainer">
                <ItemList items={items}/>
            </div>
        </main>
    );
}
export default ItemListContainer;
