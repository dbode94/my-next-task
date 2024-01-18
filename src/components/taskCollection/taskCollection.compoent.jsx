import TASK_COLLECTION from "../../TASKS_LIST";
import TaskCard from "./teaskCard/taskCard.compoentn";
import Input from "./input/input.compoennt";

import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

import './taskCollection.style.scss';

const clickHandler = (event) =>{
    console.log(event.target);
}

const TaskCollection = () =>{

    const {currentTasks} = useContext(TasksContext);
    console.log(currentTasks);

    return(
        <div className="task_collection_container">

            <h1>To do:</h1>

            <Input/>

            {
                TASK_COLLECTION.map((task,index) => {
                    return task.open ? <TaskCard task={task} key={index} clickHandler={clickHandler}/> : null
                })
            }
        </div>
    )
}

export default TaskCollection;