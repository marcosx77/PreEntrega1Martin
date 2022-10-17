import './components/Header/NavBar'
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer'
import Carrito from './components/Main/Carrito'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Provider from './Context/ContextCarrito';


function App() {
  return (
   <div>
      <Provider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              {/* <ItemListContainer/>
              <ItemDetailContainer/> */}
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:nomCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/carrito' element={<Carrito/>}/>
              {/* <Route path='*' element={<PageNotFound/>}/> */}
            </Routes>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </div>  
  );
}
export default App;
