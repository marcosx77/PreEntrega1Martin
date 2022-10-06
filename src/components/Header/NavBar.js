import React from 'react';
/* import { useEffect, useState } from "react"; */
/* import './CartWidget'; */
/* import '/Style.css'; */
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Link to='/'>
                  <Navbar.Brand>SportNew</Navbar.Brand>
                </Link>
                <Nav className="me-center" bg="dark">
                  <NavLink to="/categoria/:">Indumentaria</NavLink>
                  <NavLink to="/categoria/calzado">Calzado</NavLink>
                  <NavLink to="/categoria/accesorios">Accesorios</NavLink>
                </Nav>
                <Link to='/carrito'>
                  <CartWidget/>
                </Link>
              </Container>
          </Navbar>
        </header>
        </>
        );
        }
 export default NavBar;