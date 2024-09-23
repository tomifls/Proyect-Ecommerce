import {useState} from 'react'
import ListaDeTareas from './ListaDeTareas'

const FiltroTareas = ({tareas,render}) => {

    const [filtro, setfiltro] = useState('todas')

    const manejarFiltro = (e) => {
        setfiltro(e.target.value)
    }

    const tareasFiltradas = tareas.filter((tarea) => {
        if (filtro === 'completadas'){
            return tarea.completada;
        }else if (filtro === 'pendientes'){
            return !tarea.completada;
        } else{
            return true
        }
    })

return (
    <div>
        <h2>Filtrar Tareas</h2>

        <select name="" id="" onChange={manejarFiltro}>
            <option value="todas">Todas</option>
            <option value="completadas">Completadas</option>
            <option value="pendientes">Pendientes</option>
        </select>

        <ListaDeTareas tareas={tareasFiltradas} render={render}/>
    </div>
)
}

export default FiltroTareas