import React , { useState , useEffect } from "react";
import ItemDetalle from './ItemDetalle';
import { useParams } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';
import { collection, doc, getDoc } from "firebase/firestore";
import {baseDatos} from '../../Services/firebaseConfig'

const ItemDetailContainer= ()=>{
    const [itemDet, setItemDet]=useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        const colectionProductos=collection(baseDatos,'productos');
        const prodId =doc(colectionProductos, id);
        getDoc(prodId)

        .then((res)=>{
            setItemDet ({
               id:  res.id,
               ...res.data(),
            });        
        })
        .catch(()=>{
            console.log('Error')
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
            <ItemDetalle item={itemDet}/>
        </div>
    );
}

export default ItemDetailContainer;


/* const DetalleProducto=() =>{
    return new Promise((res, rej)=>{
        const prod= productos.find((p)=>p.id===Number(id));

        setTimeout(() => {
            res(prod);
        }, 1500);
    })
};
DetalleProducto()
.then((res)=>{
    setItemDet(res);        
})
.catch(()=>{
    console.log('Error')
})
.finally(() => {
    setLoading(false);
});

return () => setLoading(true); */