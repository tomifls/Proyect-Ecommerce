import React from 'react'

const Stop = () => {

    const handleClick = (e) =>{
        e.stopPropagation()
        alert("Hiciste click en el boton")
    }

    const handleParentClick = () =>{
        alert("Hiciste click en el contenedor")
    }
return (
    <div onClick={handleClick}>
        <h1>Componente stopPropagation</h1>

        <button onClick={handleClick}>haz click en mi</button>
    </div>
)
}

export default Stop