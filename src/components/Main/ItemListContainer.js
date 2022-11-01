import React from "react";
import ItemList from './ItemList';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MoonLoader from 'react-spinners/MoonLoader';
import { collection, getDocs, query, where } from "firebase/firestore";
import {baseDatos} from '../../Services/firebaseConfig'

const ItemListContainer=()=>{
    
    const [items, setItem]=useState([]);
    const [loading, setLoading] = useState(true);
    const { nomCategoria }=useParams();

    useEffect(()=>{
        const listaProductos=collection(baseDatos,'productos');
        getDocs(nomCategoria===undefined?listaProductos:query (listaProductos, where ('categoria','==',nomCategoria)))

        .then((res)=>{
            const productos = res.docs.map((prod)=>{
                return {
                    id:prod.id,
                    ...prod.data(),
                };
            })
            setItem(productos);
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