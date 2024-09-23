import React from 'react'

const FormPrevent = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Formulario enviado")
    }

    return (
        <div>
            <h1>Formularion preventDefault</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='nombre'/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormPrevent