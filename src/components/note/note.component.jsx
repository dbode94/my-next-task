import { useState, useEffect, useContext } from 'react';

import { NotesContext } from '../../context/notes.context';
import { UserContext } from '../../context/user.context';

import './note.style.scss'

const Note = ({text, type, noteId}) =>{
    
    const [currentText, setCurrentText] = useState('')
    const {closeNote, updateNote} = useContext(NotesContext)
    const {currentUserId} = useContext(UserContext);

    useEffect(()=>{
        if(text) setCurrentText(text);
    },[]);

    const changeHandler = (event) =>{
        const newText = event.target.value;
        setCurrentText(newText);
        updateNote(currentUserId, {text:newText,noteId})
    }

    const closingHandler = () =>{
        closeNote(currentUserId, noteId);
    }
    
    return(
        <div className='note_container'>
            <div className='note_bar'>
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