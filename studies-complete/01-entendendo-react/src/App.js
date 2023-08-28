import './App.css';
import HelloWorld from './components/HelloWorld'; 

function App() {

  const nome = "Grazielle"; 

  function sum (a,b) {
    return a + b 

  }

  const url ='https://via.placeholder.com/150'; 

  return (
    <div className="App">
      <h1>Olá mundo</h1>
      <p>Meu primeiro app</p>
      <p>Entendendo tags</p>
      <p>Meu nome é {nome} </p>
      <p>Soma: { 2 + 2 } </p>
      <p>Soma: { sum (1,2)} </p>
      <img src={url} alt="Google" />
      <HelloWorld/>
    </div>
  );
}

export default App;
