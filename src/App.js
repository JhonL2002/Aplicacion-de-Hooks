import logo from './logo.svg';
import './App.css';
import Clock from './Component/prueba.jsx';
import Cambios from './Component/solucion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cambios nombre="Jhon" apellido="Lopez"></Cambios>
        {/*<Clock></Clock>*/}
      </header>
    </div>
  );
}

export default App;
