import { loadNotes, saveNote, saveNoteChanges, deleteNote } from "../utils/firebase.utils";

import { createContext, useState} from "react";

export const NotesContext = createContext({
    currentNotes: [],
    setCurrentNotes: () => {},
    addNote: () => {},
    closeNote: () => {},
    updateNote: () => {},
    loadUserNotes: () => {},
    commitNoteChanges: () => {},
    saveAllChanges: () => {}
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

    const updateNote = (updatedNote) => {
        const updatedCurrentNotes = currentNotes.map((note) => note.noteId === updatedNote.noteId? {...note,...updatedNote} : note)
        setCurrentNotes(updatedCurrentNotes);
    }

    const commitNoteChanges = (userId, updatedNote) =>{
        saveNoteChanges(userId, updatedNote);
    }

    const closeNote = (userId, noteId) =>{        
        const newCurrentNotes = currentNotes.filter((note) => note.noteId !== noteId);
        setCurrentNotes(newCurrentNotes);
        deleteNote(userId, noteId);
    }

    const saveAllChanges = (userId) =>{
        currentNotes.forEach((note) => commitNoteChanges(userId, note));
    }

    const value = {currentNotes, setCurrentNotes, addNote, closeNote, updateNote, loadUserNotes, commitNoteChanges, saveAllChanges};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}