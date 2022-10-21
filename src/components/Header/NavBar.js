import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function NavBar(){
  
  return (
    <header>
    <Navbar className='menu' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <h1 className='titulo'>SportNew</h1>
          </Link>
          <ul>
              <NavLink className="lista" to="/categoria/indumentaria">Indumentaria</NavLink>
              <NavLink className="lista" to="/categoria/calzado">Calzado</NavLink>
              <NavLink className="lista" to="/categoria/accesorios">Accesorios</NavLink>
          </ul> 
          <Link to='/carrito'>
            <CartWidget/>
          </Link>
        </Container>
    </Navbar>
  </header>
      );
      }
export default NavBar;