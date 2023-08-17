import React from "react";
import Card from './Card';
import './App.css'

function App() {

  const [nombre,setNombre]=useState("");
  const [color,setColor]=useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido: ${nombre}`);
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su Nombre" onChange={handleNombre} /> <br></br>
        <input type="text" placeholder="Ingrese su Color" onChange={handleColor} /> <br></br>
        <button type="submit">Agregar Estudiante</button><br></br>   
      </form>
      <Card/>
    </div>

  )
}

export default App;
