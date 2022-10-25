
import { useContext } from 'react';
import { CartContext } from '../../Context/ContextCarrito';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




const Formulario = () => {
   /*  const { carrito, sumaTotal, eliminoCarrito } = useContext(CartContext); */
   return (
    <div className="formaulario">
        <Form >
            <Row className="mb-3">
                <Form.Group as={Col} md="3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Nombre" />
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder="Apellido" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group  as={Col} md="3" controlId="formGridEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="correo@correo.com" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Calle y Nro" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="formGridCity">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control placeholder="Localidad"/>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="formGridZip">
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control placeholder="Cod.Postal"/>
                </Form.Group>
            </Row>

            
            <Button variant="primary" type="submit">
            Enviar
            </Button>
        </Form>
     </div>
  );
}

export default Formulario;