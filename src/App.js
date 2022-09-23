import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
   <div className="App">
     <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a> */}
        <NavBar/>
        <ItemListContainer greeting='Todo lo que Necesitas en un solo Lugar....!!!'/>
      </header> 
    </div>  
  );
}

export default App;
