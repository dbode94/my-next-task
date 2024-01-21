import { createContext, useState} from "react";

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