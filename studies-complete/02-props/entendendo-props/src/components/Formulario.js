function Formulario(){
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log('Cadastrou usuário')
  }

  return(
    <>
    <h1>Meu cadastro: </h1>
    <form onSubmit={cadastrarUsuario}>
      <div>
        <input type="text" placeholder="Digite o seu texto" />
      </div>
      <div>
        <input type="submit" value="Cadastrar"/>
      </div>

    </form>
    </>
  )
}

export default Formulario; 