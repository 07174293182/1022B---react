// componente react
import './App.css'
function App() {
  let nome = "maria"
  let sobrenome = "rosa"
  return (
    <>
      <h1 className="nome"> Nome: {nome} </h1>
      <p className="sobrenome"> Sobrenome: {sobrenome}</p>
      </>
  ) // retorna JSX - JavaScript XML
}

export default App
