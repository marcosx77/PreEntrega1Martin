import { useContext } from "react";
import { ContextCarrito } from "../../Context/ContextCarrito";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Carrito = () =>{
    const { carrito, eliminoUno, eliminoCarrito, sumaTotal} = useContext(ContextCarrito);
    console.log (sumaTotal ())
    return (
        <div>
            {carrito.map ((prod) =>
                
                    <Row className="justify-content-md-center carrito">
                        <Col md={2}><img src={prod.img} alt="imagen"/></Col>
                        <Col md={4} xs={6}><h4>{prod.titulo} x {prod.cantidad}</h4></Col>
                        <Col md={2}>{prod.precio} * {prod.cantidad}</Col>
                        <Col md="auto"><Button className ="btn btn-secondary" onClick={() => eliminoUno(prod.id)} >Eliminar</Button></Col>
                    </Row>                
                
            )}
                
            <h2>Total: $ {sumaTotal()}</h2>
            <Button className ="btn btn-danger" onClick={eliminoCarrito}>Eliminar Carrito</Button>
        </div>
        
    )
};

export default Carrito;