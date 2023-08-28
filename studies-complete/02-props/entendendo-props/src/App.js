
import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'; 

function App({}) {
  const nome = "Ramon"; 

  return (
    <div className="App">
      <SayMyName name = "Matheus"/>
      <SayMyName name = "Grazielle"/>
      <SayMyName name = { nome }/> 
      <Pessoa 
              nome="Rodrigo" 
              idade="28" 
              profissao="Programador" 
              foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
