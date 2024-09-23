import React from 'react'

const SimpleForm = (fields,errors,handleChange,handleSubmit) => {
return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name='nombre' value={fields.nombre} onChange={handleChange}/>
            {errors.nombre && <p>{errors.nombre}</p> }
        </div>

        <div>
            <label htmlFor="mail">Mail</label>
            <input type="mail" name='mail' value={fields.mail} onChange={handleChange}/>
            {errors.mail && <p>{errors.mail}</p> }
        </div>
        <button type='submit'>Enviar</button>
    </form>
    )
}

export default SimpleForm