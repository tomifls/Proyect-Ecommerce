import React from 'react'

const ListaDeTareas = ({tareas, render}) => {
  
    return (
    <div>
        <h2>Lista de Tareas</h2>
    
        <ul>
            {tareas.map((tarea,index) => (
                <li key={index}>{render(tarea)}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default ListaDeTareas