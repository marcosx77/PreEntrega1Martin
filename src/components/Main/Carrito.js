import { useContext } from "react";
import { ContextCarrito } from "../../Context/ContextCarrito";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiDeleteBinLine } from "react-icons/ri";

const Carrito = () =>{
    const { carrito, eliminoUno, eliminoCarrito, sumaTotal, SubTotal} = useContext(ContextCarrito);

    return (
        <div>
            {carrito.map ((prod) =>
                
                    <Row className="justify-content-md-center carrito">
                        <Col md={2}><img src={prod.img} alt="imagen"/></Col>
                        <Col md={3} xs={6}><h4>{prod.titulo} x {prod.cantidad}</h4></Col>
                        <Col md={2}><h4> $ {SubTotal(prod.precio,prod.cantidad)}</h4></Col>
                        <Col md="auto">
                        <RiDeleteBinLine size={25} onClick={() => eliminoUno(prod.id)}/>
                        </Col>
                    </Row>                
                
            )}
            <Row className="justify-content-md-center carrito"> 
                <Col md={2}></Col>
                <Col md={2}> </Col>
                <Col md="auto" xs={6}><h2>Total: $ {sumaTotal()}</h2></Col>
                <Col md="auto"><Button className ="btn btn-primary" >Finalizar Compra</Button>
                <Button className ="btn btn-light" onClick={eliminoCarrito}>Eliminar Carrito</Button></Col>
            </Row>
        </div>
        
    )
};

export default Carrito;