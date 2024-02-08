//TODO: Delete if not needed thruout the app and the Notes information is only needed at the dashboard level

import { createContext, useState} from "react";

export const NotesContext = createContext({
    currentNotes: [],
    SetCurrentNotes: () => null
})


export const NotesProvider = ({children}) =>{
    const [currentNotes, SetCurrentNotes] = useState([])

    const value = {currentNotes, SetCurrentNotes};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}