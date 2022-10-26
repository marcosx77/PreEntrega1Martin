import { useContext } from "react";
import { ContextCarrito } from "../../Context/ContextCarrito";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const Carrito = () =>{
    const { carrito, eliminoUno, sumaTotal, SubTotal, eliminoCarrito} = useContext(ContextCarrito);

    /* Swal.fire({
        title: "SportNew",
        text: "Tu carrito está vacio, descubri las categorias del sitio y elegi los mejores productos",
        icon: 'warning',
        confirmButtonText: "SEGUI COMPRANDO",
    }) */
   

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
            <Row className="justify-content-sm-center ">
                <Col sm={2}>PRODUCTO</Col>
                <Col sm={3}>DESCRIPCION</Col>
                <Col sm={2}>PRECIO</Col>
                <Col sm={2}>SUBTOTTAL</Col>
            </Row>  

            {carrito.map ((prod) =>
                    <Row className="justify-content-sm-center ">
                        <Col sm={2}><img src={prod.img} alt="imagen"/></Col>
                        <Col sm={3}><h4>{prod.titulo} x {prod.cantidad}</h4></Col>
                        <Col sm={2}><h4> $ {prod.precio}</h4></Col>
                        <Col sm={2}><h4> $ {SubTotal(prod.precio,prod.cantidad)}</h4></Col>
                        <Col sm={1}>
                        <RiDeleteBinLine size={25} onClick={() => eliminoUno(prod.id)}/>
                        </Col>
                    </Row>                
                
            )}
        </div> 
        <div>
            <Row className="justify-content-md-center "> 
                <Col sm={2} ><Link  className ="btn btn-primary" to='/'>Seguir comprando</Link></Col>
                <Col sm={3}> </Col>
                <Col sm={2}><h2>Total: $ {sumaTotal()}</h2></Col>
                <Col sm={2}>
                <Link className ="btn btn-primary" to="/orden"> Finalizar Compra  </Link></Col>
                <Col sm={2}>
                <Button className ="btn btn-light" onClick={Alerta}>Eliminar Carrito</Button></Col>
            </Row>
        </div>
        </>
    )
};

export default Carrito;