import React, { useEffect } from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {baseDatos} from '../../Services/firebaseConfig'

function NavBar(){

  const [categorias, setCategorias]=useState([]);
  useEffect(()=>{
    const colleccionCategorias=collection(baseDatos,'categorias');
    getDocs (colleccionCategorias)
    .then ((res)=>{
        const categori =res.docs.map((cat)=>{
          return {
            id: cat.id,
            ...cat.data()
          }
        })
        setCategorias(categori);
    })
    .catch((error)=>{
      console.log('Devuelve un Error')
    })
  },[])

  return (
    <header>
    <Navbar className='menu' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <h1 className='titulo'>SportNew</h1>
          </Link>
          <ul>
            {categorias.map((cat) => (
                    <NavLink className="lista" key={cat.id} to={`/categoria/${cat.path}`}>
                        {cat.nombre}
                    </NavLink>
                ))} 	
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