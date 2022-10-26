
import { useContext, useState } from 'react';
import { ContextCarrito } from '../../Context/ContextCarrito';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { baseDatos } from '../../Services/firebaseConfig';
import MoonLoader from 'react-spinners/MoonLoader';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'

const Formulario = () => {
   const [loading, setLoading] = useState(false);
   const [nombre, setNombre] = useState('');
   const [apellido, setApellido] = useState('');
   const [ordenId, setOrdenId] = useState('');
   const { carrito, sumaTotal, eliminoCarrito } = useContext(ContextCarrito); 

   const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    const orden = {
        buyer: { nombre, apellido },
        items: carrito,
        total: sumaTotal(),
        date: serverTimestamp(),
    };

    const ordersCollection = collection(baseDatos, 'ordenes');
    addDoc(ordersCollection, orden)
        .then((res) => {
            setOrdenId(res.id);
            eliminoCarrito(); 
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoading(false));
    };

   const handleChangeNombre = (e) => {
    setNombre(e.target.value);
    };

    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
    };

    if (loading) {
        return (
            <div className="Cargando">
                <MoonLoader className="CargandoSpinner"
                    color="#000000"
                    cssOverride={null}
                    speedMultiplier={1}
                />
            </div>
        );
    }
    if (ordenId) {
        Swal.fire({
            html: `<h1>SportNew</h1>
            <h3>Gracias por tu Compra..!!!</h3>
            <p>Tu número de seguimiento es:</p>
            </p><strong>${ordenId}</strong></p>`,
            icon: 'success',
            confirmButtonText: "Aceptar",
        });
    }
   return (
    <div className="formaulario">
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Nombre" name="nombre"   onChange={handleChangeNombre} value={nombre}/>
                </Form.Group>
                <Form.Group as={Col} md="3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder="Apellido" name="apellido"  onChange={handleChangeApellido} value={apellido} />
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