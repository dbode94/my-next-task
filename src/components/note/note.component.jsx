import { useState, useEffect } from 'react';

import './note.style.scss'

const Note = ({text, type}) =>{
    
    const [currentText, setCurrentText] = useState('')
    
    useEffect(()=>{
        if(text) setCurrentText(text);
    },[])

    const changeHandler = (event) =>{
        setCurrentText(event.target.value);
        console.log(event.target.value)
    }
    
    return(
        <div className='note_container'>
            <div className='note_bar'>
                <div className='barButtons_container'>
                    <button>...</button>
                    <button>x</button>
                </div>
            </div>
            {/* <form action="" onSubmit={submitHandler}>
                <input type="text" name='noteText' placeholder='New note...' contentEditable='true' className='note_input' onChange={changeHandler} /> */}
                <textarea name="text" placeholder='New note...' value={currentText? currentText: ''} className='note_input' onChange={changeHandler}></textarea>
            {/* </form> */}
        </div>
    )
}

export default Note;