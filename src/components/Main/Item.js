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
                <Card.Text>$ {prod.precio}</Card.Text>
                <Button variant="primary">{prod.categoria}</Button>
                <Link  className='linkdeta' to={`/item/${prod.id}`}><Button variant="secondary">Ver Detalle</Button></Link>
                
            </Card.Body>
         </Card>
    );
};

export default Item;