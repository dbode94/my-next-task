import { createContext, useState, useEffect } from "react";
import TASK_COLLECTION from "../TASKS_LIST";

export const TasksContext = createContext({
    currentTasks: [],
    setCurrentTasks: () => null,
    completedTasks: [],
    setCompletedTasks: () => null
})


export const TasksProvider = ({children}) =>{
    const [currentTasks, setCurrentTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const value = {currentTasks,setCurrentTasks, completedTasks, setCompletedTasks};
    
    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}