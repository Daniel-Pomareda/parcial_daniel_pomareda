import React, { useState } from "react";
import Card from './Card';
import './App.css'

function App() {

  const [nombre,setNombre]=useState("");
  const [color,setColor]=useState("");
  const [validationsPassed, setValidationsPassed] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);


  const handleNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreValid = nombre.trim().length >= 3 && !nombre.startsWith(" ");
    const colorValid = color.length >= 6;

    if (nombreValid && colorValid) {
      setValidationsPassed(true);
      alert('Hola ' + nombre + ' sus datos han sido ingresados correctamente');
    } else {
      setValidationsPassed(false);
    }

    setSubmitClicked(true);
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name= "Nombre" 
        value={nombre} 
        placeholder="Ingrese su Nombre" 
        onChange={handleNombre} 
        /> {" "}
        <br />
        <input 
        type="text" 
        name= "Color" 
        value={color} 
        placeholder="Ingrese su Color" 
        onChange={handleColor} 
        /> {" "}
        <br />
        <button type="submit">Agregar Estudiante</button>
        <br />   
      </form>
      {submitClicked && !validationsPassed && (
        <p>Por favor, verifica que la información sea correcta.</p>
    )}
    {validationsPassed && <Card nombre={nombre} color={color} />}
    </div>
  );
}

export default App;
