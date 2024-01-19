import { useContext } from 'react';
import { TasksContext } from '../../../context/tasks.context';

import './taskCard.style.scss'



const TaskCard = ({task}) =>{

    const {text, id, date} = task;
    const { currentTasks, setCurrentTasks,completedTasks, setCompletedTasks} = useContext(TasksContext)

    const clickHandler = () =>{
        const newCompletedTasks = currentTasks.filter((task) => task.id === id);
        const newCurrentTasks = currentTasks.filter((task) => task.id !== id);
        
        setCurrentTasks(newCurrentTasks);
        setCompletedTasks([...completedTasks, ...newCompletedTasks]);
        
    }

    return(
        <div className="task_card" onClick={clickHandler}>
            {text + ' ' + date }
        </div>
    )
}

export default TaskCard;