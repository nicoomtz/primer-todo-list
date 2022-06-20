import React from "react";
import "./ListaTareas.css";

function ListaTareas({ texto, id, eliminarTarea }) {
  return (
    <div className="lista-tareas-container">
      <div className="tarea" id={id} key={id}>
        {texto}
      </div>
      <button onClick={eliminarTarea} id={id}></button>
    </div>
  );
}

export default ListaTareas;
