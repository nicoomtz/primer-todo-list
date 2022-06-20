import "./styles.css";
import CrearTareas from "./componentes/CrearTareas";
import { useState } from "react";

export default function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      <CrearTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
}
