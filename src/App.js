import './components/NavBar'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
   <div className='App-header'>
     <header >
        <NavBar/>
        <ItemListContainer greeting='Todo lo que Necesitas en un solo Lugar....!!!'/>
      </header> 
    </div>  
  );
}

export default App;
