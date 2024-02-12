import { loadNotes, saveNote, saveNoteChanges, deleteNote } from "../utils/firebase.utils";

import { createContext, useState} from "react";

export const NotesContext = createContext({
    currentNotes: [],
    setCurrentNotes: () => {},
    addNote: () => {},
    closeNote: () => {},
    updateNote: () => {},
    loadUserNotes: () => {}
})



export const NotesProvider = ({children}) =>{

    const [currentNotes, setCurrentNotes] = useState([])

    const loadUserNotes = async (userId) =>{
        setCurrentNotes(await loadNotes(userId));
    }

    const addNote = (userId, note) =>{
        setCurrentNotes([...currentNotes, note]);
        saveNote(userId, note);
    }

    const updateNote = (userId, updatedNote) => {
        const updatedCurrentNotes = currentNotes.map((note) => note.noteId === updatedNote.noteId? {...note,...updatedNote} : note)
        setCurrentNotes(updatedCurrentNotes);
        saveNoteChanges(userId, updatedNote);
    }

    const closeNote = (userId, noteId) =>{
        
        const newCurrentNotes = currentNotes.filter((note) => note.noteId !== noteId);
        setCurrentNotes(newCurrentNotes);
        deleteNote(userId, noteId);
    }

    const value = {currentNotes, setCurrentNotes, addNote, closeNote, updateNote, loadUserNotes};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}