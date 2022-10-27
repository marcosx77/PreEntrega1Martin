import { useContext } from "react";
import { ContextCarrito } from "../../Context/ContextCarrito";
import Button from 'react-bootstrap/Button';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const Carrito = () =>{
    const { carrito, eliminoUno, sumaTotal, SubTotal, eliminoCarrito, sumaCantidad} = useContext(ContextCarrito);

    const Alerta=()=>{
        Swal.fire({
            title: "SportNew",
            text: "¿Seguro que elimina el carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                eliminoCarrito(); 
            } 
        });
    }

    return (
        <>
        <div className="carrito">
            <div claclassNamessname="row align-items-center">
                <div className="col-2"></div>
                <div clclassNameass="col-2">DESCRIPCION</div>
                <div className="col-1">PRECIO</div>
                <div className="col-1">SUBTOTAL</div>
            </div>
            {carrito.map ((prod) =>
                <div className="row align-items-center" key={prod.id}>
                    <div className="col-2"><img src={prod.img} alt="imagen"/></div>
                    <div className="col-2"><h6>{prod.titulo} x {prod.cantidad}</h6></div>
                    <div className="col-1"><h6> $ {prod.precio}</h6></div>
                    <div className="col-1"><h6> $ {SubTotal(prod.precio,prod.cantidad)}</h6></div>
                    <div className="col-1"><RiDeleteBinLine size={23} onClick={() => eliminoUno(prod.id)}/></div>
                </div>
            )}
            <div className="row align-items-center">
                <div className="col-2"></div>
                <div className="col-2"><h5>Articulos: {sumaCantidad()}</h5></div>
                <div className="col-1"></div>
                <div className="col-3"><h4>Total: $ {sumaTotal()}</h4></div>
            </div>
            <div className="row align-items-center">
                <div className="col-2"><Link  className ="btn btn-primary" to='/'>Seguir comprando</Link></div>
                <div className="col-2"><Button style={{ visibility: sumaCantidad() === 0 ? 'hidden' : 'visible'}} className ="btn btn-light" onClick={Alerta}>Eliminar Carrito</Button></div>
                <div className="col-1"></div>
                <div className="col-3"><Link style={{ visibility: sumaCantidad() === 0 ? 'hidden' : 'visible'}} className ="btn btn-primary" to="/orden" > Finalizar Compra  </Link></div>
            </div>
        </div> 
        </>
    )
};

export default Carrito;