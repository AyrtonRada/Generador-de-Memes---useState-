
import BotonDesplegable from './botonDesplegableComponent';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [texto1, setTexto1] = useState('')
  const [texto2, setTexto2] = useState('')

  const onChangeTexto1 = (e) => {
    setTexto1(e.target.value)
  }
  
  const onChangeTexto2 = (e) => {
    setTexto2(e.target.value)
  }
  
  
  return (
    <div className="App" >
      
    {/* boton desplegable */}
    <BotonDesplegable />
      <div className='input d-flex container'>
        <input type="text" placeholder='Ingrese el texto superior' onChange={onChangeTexto1}/>
        <input type="text" placeholder='Ingrese el texto inferior' onChange={onChangeTexto2}/>
      </div>      
      <button>Exportar</button>
      <div>
      <span>{texto1}</span><br/>
      <span>{texto2}</span><br/>
      </div>
      
    </div>
  );
}

export default App;
