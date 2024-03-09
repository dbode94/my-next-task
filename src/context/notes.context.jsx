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
        console.log('----------------------------------');
        const date = new Date();
        console.log('adding note, updating context date', date)
        setLastContextChageDate(date);
        console.log('adding note, updating DB date', date)
        setLastDBChageDate(date);
    }

    const updateNote = (updatedNote) => {
        const updatedCurrentNotes = currentNotes.map((note) => note.noteId === updatedNote.noteId? {...note, ...updatedNote} : note)
        setCurrentNotes(updatedCurrentNotes);
        console.log('----------------------------------');
        const date = new Date();
        console.log('updating note, updating context date', date)
        setLastContextChageDate(date);
    }

    const commitNoteChanges = async (userId, updatedNote) => {
        await saveNoteChanges(userId, updatedNote);
        console.log('----------------------------------');
        const date = new Date();
        console.log('commiting note changes, updating DB date', date)
        setLastDBChageDate(date);
    }

    const closeNote = (userId, noteId) =>{        
        const newCurrentNotes = currentNotes.filter((note) => note.noteId !== noteId);
        setCurrentNotes(newCurrentNotes);
        deleteNote(userId, noteId);
        const date = new Date();
        setLastContextChageDate(date);
        setLastDBChageDate(date);
    }

    const saveAllChanges = (userId) =>{
        currentNotes.forEach((note) => commitNoteChanges(userId, note));
        setLastDBChageDate(new Date());
    }

    const value = {currentNotes, setCurrentNotes, addNote, closeNote, updateNote, loadUserNotes, commitNoteChanges, saveAllChanges, lastContextChangeDate, lastDBChangeDate};
    
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}