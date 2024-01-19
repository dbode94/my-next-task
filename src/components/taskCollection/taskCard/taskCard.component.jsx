import { useContext } from 'react';
import { TasksContext } from '../../../context/tasks.context';

import './taskCard.style.scss'



const TaskCard = ({task}) =>{

    const {text, id, open, date} = task;
    const { currentTasks, setCurrentTasks,completedTasks, setCompletedTasks} = useContext(TasksContext)

    const openTasksClickHandler = () =>{
        const newCompletedTasks = [...completedTasks , {...currentTasks.filter((task) => task.id === id)[0], open: false}];
        const newCurrentTasks = currentTasks.filter((task) => task.id !== id);
        
        updateTasksContext(newCurrentTasks, newCompletedTasks);
    }

    const updateTasksContext = (newCurrentTasks, newCompletedTasks) =>{
        setCurrentTasks(newCurrentTasks);
        setCompletedTasks(newCompletedTasks);
    }

    const completedTasksClickHandler = () =>{
        const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
        const newCurrentTasks = [...currentTasks, {...completedTasks.filter((task) => task.id === id)[0], open:true}];
        
        updateTasksContext(newCurrentTasks, newCompletedTasks)
    }



    return(
        <div className="task_card" onClick={open? openTasksClickHandler : completedTasksClickHandler }>
            {text + ' ' + date }
        </div>
    )
}

export default TaskCard;