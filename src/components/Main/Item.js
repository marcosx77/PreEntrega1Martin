import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item=({prod})=>{
    return (
        <Card  className='tarjeta' >
            <Card.Img className='tarjeta-foto' variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.titulo}</Card.Title>
                {/* <Card.Text>{prod.descripcion}</Card.Text> */}
                <Card.Text>$ {prod.precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
                <Link className='linkdeta' to={`/item/${prod.id}`}>Ver Detalle</Link>
                
            </Card.Body>
         </Card>
    );
};

export default Item;