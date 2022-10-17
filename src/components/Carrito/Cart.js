import { useContext } from "react";
import { ContextCarrito } from "../../Context/ContextCarrito";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () =>{
    const { carrito, eliminoUno, eliminoCarrito} = useContext(ContextCarrito);

    return (
        <div>
            {carrito.map ((prod) =>
                <div>
                    <Card  className='tarjeta' >
                        <Card.Img className='tarjeta-foto' variant="left" src={prod.img} />
                     <Card.Body>
                         <Card.Title>{prod.titulo}</Card.Title>
                         <Card.Text>Precio: $ {prod.precio}</Card.Text>
                         <Card.Text>Cantidad: {prod.cantidad}</Card.Text>
                         <Card.Text>SubTotal: $ ({prod.precio} * {prod.cantidad})</Card.Text>
                         <Button variant="primary" onClick={() => eliminoUno(prod.id)} >Eliminar</Button>
                     </Card.Body>
                    </Card>
                </div>
            )}
            
            <h2>Total: $</h2>
            <button onClick={eliminoCarrito}>Eliminar Carrito</button>
        </div>
    )
};

export default Cart;