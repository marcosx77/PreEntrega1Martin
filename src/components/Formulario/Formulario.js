
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
import { Link } from 'react-router-dom';

const Formulario = () => {
   const [loading, setLoading] = useState(false);
   const [nombre, setNombre] = useState('');
   const [apellido, setApellido] = useState('');
   const [correo, setCorreo] = useState('');
   const [correo2, setCorreo2] = useState('');
   const [telefono, setTelefono] = useState('');
   const [ordenId, setOrdenId] = useState('');
   const { carrito, sumaTotal, eliminoCarrito, sumaCantidad } = useContext(ContextCarrito); 

   const EnviarOrdenCompra = (event) => {
    
    setLoading(true);

    event.preventDefault();
    const orden = {
        buyer: { nombre, apellido, correo, telefono },
        items: carrito,
        total: sumaTotal(),
        fecha: serverTimestamp(),
    };

    const detalleOrden = collection(baseDatos, 'ordenes');
    if (correo===correo2){
        addDoc(detalleOrden, orden)
            .then((res) => {
                setOrdenId(res.id);
                eliminoCarrito(); 
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
        }else{
            Swal.fire({
                title: 'SportNew',
                text: 'Los correos Electrónicos no coinciden, Verifique',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
              setLoading(false);
        }
        };

   const cambiaNombre = (event) => {
    setNombre(event.target.value);
    };

    const cambiaCorreo = (event) => {
        setCorreo(event.target.value);
    };

    const cambiaCorreo2 = (event) => {
        setCorreo2(event.target.value);
    };
    const cambiaApellido = (event) => {
        setApellido(event.target.value);
    };

    const cambiaTelefono = (event) => {
        setTelefono(event.target.value);
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
        return(
            <div className="carritoVacio">
                <h1>SporNew</h1>
                <h3>Gracias por tu Compra..!!!</h3>
                <h5>Tu número de seguimiento es:</h5>
                <h2>{ordenId}</h2>
                <Link  className ="btn btn-primary" to='/'>Seguir comprando</Link>
            </div>
           ) 
    }
    
   return (
    <>
    <div className="formaulario">
        <div className="formDatos">
            <Form onSubmit={EnviarOrdenCompra}>
                <h5>Formulario de compra</h5>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Nombre" name="nombre"  onChange={cambiaNombre} value={nombre} required/>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Apellido" name="apellido"  onChange={cambiaApellido} value={apellido} required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group  as={Col} md="12" controlId="formGridEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="correo@correo.com" name="correo" onChange={cambiaCorreo} value={correo} required/>
                    </Form.Group>
                    <Form.Group  as={Col} md="12" controlId="formGridEmail">
                        <Form.Label>Confirmar Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="correo@correo.com" name="correo2" onChange={cambiaCorreo2} value={correo2} required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formGridTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control placeholder="Nro de Teléfono" onChange={cambiaTelefono} value={telefono} required/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" disabled={sumaCantidad() === 0}>
                Enviar Datos
                </Button>
            </Form>
        </div>
        <div className='formDeta'>
            <h3>Detalle de la Compra</h3>
            <br></br>
            {carrito.map ((prod) =>
                <p key={prod.id}>{prod.titulo} x {prod.cantidad}</p>
            )}
            <br></br>
            <h5>Cant.Articulos: {sumaCantidad()}</h5>
            <h3>Total Compra: $ {sumaTotal()}</h3>
        </div>
     </div>
    
    </>
  );
}

export default Formulario;