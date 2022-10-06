import './components/Header/NavBar'
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Main/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer'
import Carrito from './components/Main/Carrito'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <div className='App-header'>
      <>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              {/* <ItemListContainer/>
              <ItemDetailContainer/> */}
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:nomCategoria' element={<ItemListContainer/>}/>
              <Route path='/item' element={<ItemDetailContainer/>}/>
              <Route path='/Carrito' element={<Carrito/>}/>
              {/* <Route path='*' element={<PageNotFound/>}/> */}
            </Routes>
            <Footer/>
        </BrowserRouter>
      </>
    </div>  
  );
}

export default App;
