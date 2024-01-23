import { TasksContext } from '../../../context/tasks.context'
import { useContext } from 'react'

import './input.style.scss'

const Input = () =>{
    const { currentTasks, setCurrentTasks} = useContext(TasksContext)

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        
        const input = document.getElementById('input_task');

        if(input.value !== ''){
            const dateSnap = new Date();
            const creationDate = dateSnap.getMonth()+1 + '/' + dateSnap.getDate() + '/' + dateSnap.getFullYear();
            setCurrentTasks([...currentTasks, {id: currentTasks.length, text: input.value, open:true, date: creationDate}])
        }
        
        input.value = '';
    }

    return(
        <form action='' onSubmit={onSubmitHandler} method="get">
            <input type="text" placeholder="+ New Task" className="input_field" id='input_task'/>
        </form>
    )
}

export default Input;