import { useContext } from 'react';
import {TasksContext} from '../../../context/tasks.context';

import './deletebutton.style.scss' 

const DeleteButton = ({task}) => {

    const {currentTasks, setCurrentTasks, completedTasks,setCompletedTasks} = useContext(TasksContext);

    const deleteHandler = () =>{
        let newTasks = [];

        if(task.open){
            newTasks = currentTasks.filter((currentTask) => currentTask.id !== task.id);
            setCurrentTasks(newTasks);
        }
        else {
            newTasks = completedTasks.filter((completedTask) => completedTask.id !== task.id);
            setCompletedTasks(newTasks);
        }

        
    }

    return (<button className="delete_button" onClick={deleteHandler}>x</button>)
}

export default DeleteButton;