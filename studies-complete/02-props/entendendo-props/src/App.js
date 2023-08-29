import './App.css';
import Evento from './components/Evento'; 
import Formulario from './components/Formulario'

function App({}) {
  const nome = "Ramon"; 

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Formulario/>
    </div>

  );
}

export default App;
