import { useState } from 'react'
import { TasksContext } from '../../../context/tasks.context'
import { useContext } from 'react'

import './input.style.scss'

const Input = () =>{
    const [inputValue, setInputValue] = useState("")
    const { currentTasks, setCurrentTasks} = useContext(TasksContext)

    const onChangeHandler = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        if(inputValue !== ''){
            const dateSnap = new Date();
            const creationDate = dateSnap.getMonth()+1 + '/' + dateSnap.getDay() + '/' + dateSnap.getFullYear();
            setCurrentTasks([...currentTasks, {id: currentTasks.length, text: inputValue, open:true, date: creationDate}])
        }
    }

    return(
        <form action='' onSubmit={onSubmitHandler} method="get">
            <input type="text" placeholder="+ New Task" className="input_field" onChange={onChangeHandler}/>
        </form>
    )
}

export default Input;