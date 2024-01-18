import { useContext } from 'react';
import { TasksContext } from '../../../context/tasks.context';

import './taskCard.style.scss'



const TaskCard = ({task}) =>{

    const {text, id, open, date} = task;
    const { currentTasks, setCurrentTasks} = useContext(TasksContext)

    const clickHandler = () =>{
        const newCurrentTasks = currentTasks.map((task) => task.id !== id ? task : {...task, open: false});
        setCurrentTasks(newCurrentTasks);
    }

    return(
        <div className="task_card" onClick={clickHandler}>
            {text + ' ' + date }
        </div>
    )
}

export default TaskCard;