import React, { useState } from "react";

function App() {
  // useState retorna 2 funciones
  // El primero es el state actual = this.state, el segundo es la funcion que actualiza el state = this.setState();
  const[citas, guardarCita] = useState([]);

  console.log(citas);

  return (
    <h1>Hola</h1>
  );
  


  


}

export default App;