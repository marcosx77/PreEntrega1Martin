import { createContext, useState } from "react";
export const ContextCarrito = createContext();


const Provider = ({children}) => {

    const [carrito, setCarrito]=useState([]);

    const agregarCarrito =(item, cantidad)  =>{
        const producto = {...item, cantidad};
        if (estaEnCarrito(producto.id)) {
            sumoCant(producto);
        } else {
            setCarrito([...carrito, producto])
        }

    };

    const sumoCant= (prodAdd) =>{
        const atualizaCarrito = carrito.map((prodCarrito) => {
            if (prodCarrito.id===prodAdd.id) {
                const pordActualiza ={
                    ...prodCarrito, cantidad: prodAdd.cantidad,
                };
                return pordActualiza;
            } else {
                return prodCarrito;
            }
        });
        setCarrito (atualizaCarrito);
    };

    const SubTotal =(precio,cantidad)=>{
        const subtot=precio*cantidad;
        return(subtot);
    };
    const sumaTotal =() =>{
        const tot= carrito.reduce((a,p)=> a+(p.precio*p.cantidad),0);
        return(tot);
    };

    const sumaCantidad=()=>{
        let cant=0;
        const cartCopia=[...carrito];
        cartCopia.forEach((p)=>{
            cant +=p.cantidad;
        });
        return(cant);
    }
    const cantPordCarrito=(id)=>{
        const prod=carrito.find((p)=>p.id===id)
        return prod?.cantidad
    }
    const estaEnCarrito =(id) => carrito.some((prod) => prod.id===id);

    const eliminoUno = (id) =>{
        const filtro =carrito.filter((prod)=> prod.id !==id);
        setCarrito(filtro);
    }

    const eliminoCarrito =()=> {
        setCarrito([]);
       /* Alerta(); */
    }
    
   
    return (
        <ContextCarrito.Provider value={{ carrito, agregarCarrito, eliminoUno, eliminoCarrito, sumaTotal, SubTotal, sumaCantidad, cantPordCarrito}}>
                {children}
        </ContextCarrito.Provider>
        
    )
};
export default Provider;