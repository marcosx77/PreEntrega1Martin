import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item=({prod})=>{
    return (
        <Card  style={{ width: '15rem' }} >
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.titulo}</Card.Title>
                {/* <Card.Text>{prod.descripcion}</Card.Text> */}
                <Card.Text>$ {prod.precio}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
         </Card>
    );
};

export default Item;