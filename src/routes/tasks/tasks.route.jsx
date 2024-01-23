import Input from "../../components/taskCollection/input/input.compoennt"
import TaskCollection from "../../components/taskCollection/taskCollection.component"
import { useContext } from "react"
import { TasksContext } from "../../context/tasks.context"

import './tasks.style.scss'

const Tasks = () =>{

    const {currentTasks, completedTasks} = useContext(TasksContext)
    
    return(
        <div className="tasks_container">
            <h1>To do:</h1>
            <Input/>
            <TaskCollection tasksList={currentTasks}/>

            <h4>Completed tasks:</h4>
            <TaskCollection tasksList={completedTasks} collectionType='completed'/>
        </div>
    )
}

export default Tasks;