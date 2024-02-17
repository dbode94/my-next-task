import Note from "../../components/note/note.component";
import NOTE_TYPES from "../../components/note/NOTE_TYPES";

import {v4 as uuidv4} from 'uuid';
import { useEffect, useContext } from "react";
import { NotesContext } from "../../context/notes.context";
import { UserContext } from "../../context/user.context";
import './dashboard.style.scss';

const Dashboard = () =>{

    const {currentNotes, addNote, loadUserNotes} = useContext(NotesContext);
    const {currentUserId} = useContext(UserContext);

    useEffect(()=>{
        loadUserNotes(currentUserId);
    },[])
    

    const addNoteHandler = () =>{
        addNote(currentUserId,{
            text:'',
            type:'',
            noteId: uuidv4(),
            color: '#e2e239'
        })
    }
    
    return(
        <div className="dashboard_container">
            {
                currentNotes? currentNotes.map((note) => <Note type={NOTE_TYPES.TEXT_NOTE} key={note.noteId} {...note}/>) : null
            }
            <button className="addNote_button" onClick={addNoteHandler}>+</button>
        </div>
    )
}

export default Dashboard;