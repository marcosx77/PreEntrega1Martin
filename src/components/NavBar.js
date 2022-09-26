import React from 'react';
import { useEffect, useState } from "react";
import './CartWidget';
import './Style.css';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getTopNav } from "./NavOption";

function NavBar(){
    const [navItems, setNavItems] = useState([]);
    useEffect(() => {
        setNavItems(getTopNav());
      }, []);

    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home" className="Nombre">SportNew</Navbar.Brand>
              <Nav className="me-center" bg="dark">
              {navItems.map((item) => (
                <Nav.Link href={item.href}>{item.label}</Nav.Link>
            ))}
              </Nav>
              <CartWidget/>
            </Container>
        </Navbar>
        </>
        );
        }
 export default NavBar;