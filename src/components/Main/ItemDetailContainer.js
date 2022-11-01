import React , { useState , useEffect } from "react";
import ItemDetalle from './ItemDetalle';
import { useParams } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';
import { collection, doc, getDoc } from "firebase/firestore";
import {baseDatos} from '../../Services/firebaseConfig'

const ItemDetailContainer= ()=>{
    const [itemDetalle, setItemDetalle]=useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        const listaProductos=collection(baseDatos,'productos');
        const prodId =doc(listaProductos, id);
        getDoc(prodId)

        .then((r)=>{
            setItemDetalle ({
               id:  r.id,
               ...r.data(),
            });        
        })
        .catch(()=>{
            console.log('Devuelve Error')
        })
        .finally(() => {
            setLoading(false);
        });

        return () => setLoading(true);
    },[id]);

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

    return (
        <div className="itemlistcontainer">
            <ItemDetalle item={itemDetalle}/>
        </div>
    );
}

export default ItemDetailContainer;