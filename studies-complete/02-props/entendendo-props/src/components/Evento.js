function Evento(){

  function handleClick() {
    console.log("Fui clicado")
  }

  return(
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={handleClick}>Ativar</button>
    </>
  )
}

export default Evento; 