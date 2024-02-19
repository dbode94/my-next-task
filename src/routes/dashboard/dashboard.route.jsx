import Note from "../../components/note/note.component";
import NOTE_TYPES from "../../components/note/NOTE_TYPES";
import AlertPrompt from "../../components/alertMessage/alertPrompt.component";

import {v4 as uuidv4} from 'uuid';
import { useEffect, useContext } from "react";
import { NotesContext } from "../../context/notes.context";
import { UserContext } from "../../context/user.context";
import './dashboard.style.scss';

const Dashboard = () =>{

    const {currentNotes, addNote, loadUserNotes} = useContext(NotesContext);
    const {currentUserId} = useContext(UserContext);

    //TODO: boolean place holder
    let userIsLoggingOut = true;

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
    
    const acceptedHanlder = () => {
        console.log('accepted handler')
    }

    const declinedHanlder = () => {
        console.log('decline handler')
    }
    
    return(
        <div className="dashboard_container">
            {
                currentNotes? currentNotes.map((note) => <Note type={NOTE_TYPES.TEXT_NOTE} key={note.noteId} {...note}/>) : null
            }
            {
                userIsLoggingOut && <div className="alertComponent_container"> <AlertPrompt message={'Would you like to save all outstanding changes?'} acceptedHandler={acceptedHanlder} declinedHandler={declinedHanlder}/></div>
            }
            <button className="addNote_button" onClick={addNoteHandler}>+</button>
        </div>
    )
}

export default Dashboard;