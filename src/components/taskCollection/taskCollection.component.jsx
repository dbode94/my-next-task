import TaskCard from "./taskCard/taskCard.compoentn";
import Input from "./input/input.compoennt";

import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

import './taskCollection.style.scss';


const TaskCollection = () =>{

    const {currentTasks} = useContext(TasksContext);

    return(
        <div className="task_collection_container">

            <h1>To do:</h1>

            <Input/>

            {
                currentTasks.map((task,index) => {
                    return task.open ? <TaskCard task={task} key={index} /> : null
                })
            }
        </div>
    )
}

export default TaskCollection;