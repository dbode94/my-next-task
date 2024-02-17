import OptionPanel from './optionPanel/optionPanel.component';

import { useState, useContext } from 'react';

import { NotesContext } from '../../context/notes.context';
import { UserContext } from '../../context/user.context';

import './note.style.scss'

const Note = (note) =>{
    const {text, type, noteId, color} = note;
    const [currentText, setCurrentText] = useState(text)
    const [hasBeenChanged, setHasBeenChanged] = useState(false);
    const [hideOptions, setHideOption] = useState(false);
    const {closeNote, updateNote, commitNoteChanges} = useContext(NotesContext)
    const {currentUserId} = useContext(UserContext);

    const changeHandler = async (event) =>{
        const newText = event.target.value;
        await setCurrentText(newText);
        setHasBeenChanged(true);
        updateNote({text:currentText, ...note});
    }

    const optionChangeHandler = () => {
        setHasBeenChanged(true);
    }

    const saveHandler = () =>{
        commitNoteChanges(currentUserId, {...note, text: currentText})
        setHasBeenChanged(false);
    }

    const closingHandler = () =>{
        closeNote(currentUserId, noteId);
    }

    const optionHandler = () =>{
        setHideOption(!hideOptions)
    }
    
    return(
        <div className='note_container' style={{backgroundImage: `linear-gradient(135deg, rgb(255, 255, 255), ${color}`}}>
            <div className='note_bar'>
                {
                    hasBeenChanged? <button className='saveChanges_note' onClick={saveHandler}>&#x2713;</button> : <div></div>
                }
                <div className='barButtons_container'>    
                    <button onClick={optionHandler}>...</button>
                    <button onClick={closingHandler}>x</button>
                </div>
            </div>
            <OptionPanel note={note} hide={hideOptions} optionChangeHandler={optionChangeHandler}/>
            <textarea name="text" placeholder='New note...' value={currentText? currentText: ''} className='note_input' onChange={changeHandler}></textarea>
        </div>
    )
}

export default Note;