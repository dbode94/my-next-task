import { useState, useContext } from 'react';

import { NotesContext } from '../../context/notes.context';
import { UserContext } from '../../context/user.context';

import './note.style.scss'

const Note = ({text, type, noteId}) =>{
    
    const [currentText, setCurrentText] = useState(text)
    const [hasBeenChanged, setHasBeenChanged] = useState(false);
    const {closeNote, updateNote, commitNoteChanges} = useContext(NotesContext)
    const {currentUserId} = useContext(UserContext);

    const changeHandler = async (event) =>{
        const newText = event.target.value;
        await setCurrentText(newText);
        setHasBeenChanged(true);
        updateNote({text:currentText, noteId});
    }

    const saveHandler = () =>{
        commitNoteChanges(currentUserId, {text: currentText, noteId})
        setHasBeenChanged(false);
    }

    const closingHandler = () =>{
        closeNote(currentUserId, noteId);
    }
    
    return(
        <div className='note_container'>
            <div className='note_bar'>
                {
                    hasBeenChanged? <button className='saveChanges_note' onClick={saveHandler}>&#x2713;</button> : <div></div>
                }
                <div className='barButtons_container'>    
                    <button>...</button>
                    <button onClick={closingHandler}>x</button>
                </div>
            </div>
                <textarea name="text" placeholder='New note...' value={currentText? currentText: ''} className='note_input' onChange={changeHandler}></textarea>
        </div>
    )
}

export default Note;