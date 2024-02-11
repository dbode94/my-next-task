import { createContext, useState} from "react";

export const NotesContext = createContext({
    currentNotes: [],
    setCurrentNotes: () => {},
    addNote: () => {},
    closeNote: () => {},
    updateNote: () => {}
})



export const NotesProvider = ({children}) =>{

    const [currentNotes, setCurrentNotes] = useState([])
    
    const addNote = (note) =>{
        setCurrentNotes([...currentNotes, note]);
    }

    const updateNote = (updatedNote) => {
        const updatedCurrentNotes = currentNotes.map((note) => note.noteId === updatedNote.noteId? {...note,...updatedNote} : note)
        setCurrentNotes(updatedCurrentNotes);
    }

    const closeNote = (id) =>{
        console.log('notes context id', id)
        console.log(currentNotes);
        const newCurrentNotes = currentNotes.filter((note) => note.noteId !== id);
        console.log(newCurrentNotes);
        setCurrentNotes(newCurrentNotes);
    }

    const value = {currentNotes, setCurrentNotes, addNote, closeNote, updateNote};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}