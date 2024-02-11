import { useState, useEffect, useContext } from 'react';

import { NotesContext } from '../../context/notes.context';

import './note.style.scss'

const Note = ({text, type, noteId}) =>{
    
    const [currentText, setCurrentText] = useState('')
    const {closeNote, updateNote} = useContext(NotesContext)

    useEffect(()=>{
        if(text) setCurrentText(text);
    },[]);

    const changeHandler = (event) =>{
        const newText = event.target.value;
        setCurrentText(newText);
        updateNote({text:newText,noteId})
    }

    const closingHandler = () =>{
        console.log(noteId);
        closeNote(noteId);
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