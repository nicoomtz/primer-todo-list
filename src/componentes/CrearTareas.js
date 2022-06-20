import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListaTareas from "./ListaTareas";
import "./CrearTareas.css";

function CrearTareas(props) {
  const [input, setInput] = useState(``);
  const [tareas, setTareas] = useState([]);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const tareaNueva = {
      texto: input,
      id: uuidv4()
    };

    setTareas([tareaNueva, ...tareas]);
  }

  function eliminarTarea(e) {
    const tareasActualizadas = tareas.filter(
      (tarea) => tarea.id !== e.target.id
    );
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Agregar Tarea</button>
      </form>
      <div>
        {tareas.map((tarea) => (
          <ListaTareas
            texto={tarea.texto}
            id={tarea.id}
            key={tarea.id}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default CrearTareas;
