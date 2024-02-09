import { useContext } from "react"
import { TasksContext } from "../../context/notes.context"

import './NotesDashboard.style.scss'

const NotesDashboard = () =>{

    const {currentTasks, completedTasks} = useContext(TasksContext)
    
    return(
        <div className="tasks_container">

        </div>
    )
}

export default NotesDashboard;