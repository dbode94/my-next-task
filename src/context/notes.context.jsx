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
    saveAllChanges: () => {},
    lastContextChangeDate: '',
    lastDBChangeDate: '',
})


export const NotesProvider = ({children}) =>{

    
    const [lastContextChangeDate, setLastContextChageDate] = useState(new Date())
    const [lastDBChangeDate, setLastDBChageDate] = useState(lastContextChangeDate)
    const [currentNotes, setCurrentNotes] = useState([])

    const loadUserNotes = async (userId) =>{
        setCurrentNotes(await loadNotes(userId));
    }

    const addNote = (userId, note) =>{
        setCurrentNotes([...currentNotes, note]);
        saveNote(userId, note);
        setLastContextChageDate(new Date());
        setLastDBChageDate(lastContextChangeDate);
    }

    const updateNote = (updatedNote) => {
        const updatedCurrentNotes = currentNotes.map((note) => note.noteId === updatedNote.noteId? {...note, ...updatedNote} : note)
        setCurrentNotes(updatedCurrentNotes);
        setLastContextChageDate(new Date());
    }

    const commitNoteChanges = async (userId, updatedNote) =>{
        await saveNoteChanges(userId, updatedNote);
        setLastDBChageDate(new Date());
    }

    const closeNote = (userId, noteId) =>{        
        const newCurrentNotes = currentNotes.filter((note) => note.noteId !== noteId);
        setCurrentNotes(newCurrentNotes);
        deleteNote(userId, noteId);
        setLastContextChageDate(new Date());
        setLastDBChageDate(lastContextChangeDate);
    }

    const saveAllChanges = (userId) =>{
        currentNotes.forEach((note) => commitNoteChanges(userId, note));
    }

    const value = {currentNotes, setCurrentNotes, addNote, closeNote, updateNote, loadUserNotes, commitNoteChanges, saveAllChanges, lastContextChangeDate, lastDBChangeDate};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}