import Note from "../../components/note/note.component";
import NOTE_TYPES from "../../components/note/NOTE_TYPES";

import {v4 as uuidv4} from 'uuid';
import { useEffect, useContext } from "react";
import { NotesContext } from "../../context/notes.context";
import { UserContext } from "../../context/user.context";
import { loadNotes } from "../../utils/firebase.utils";
import './dashboard.style.scss';

const Dashboard = () =>{

    const {currentNotes, setCurrentNotes, addNote} = useContext(NotesContext);
    const {currentUserId} = useContext(UserContext);

    useEffect(()=>{
        // const fetchData = async () =>{
        //     return await loadNotes(currentUserId)
        // }
        // const notes = fetchData();
        // console.log(notes);
    },[])
    

    const addNoteHandler = () =>{
        addNote({
            text:'',
            type:'',
            noteId: uuidv4()
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