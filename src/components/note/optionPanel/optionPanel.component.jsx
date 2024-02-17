import { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../../../context/notes.context';

import './optionPanel.style.scss'

const OptionPanel = ({note, hide, optionChangeHandler}) =>{

    const {updateNote} = useContext(NotesContext);
    const [presetColorDivsArray, setPresetColorDivArray] = useState([]) 
    const [animationClassName, setAnimationClassName] = useState('');
    const [inputColor, setInputColor] = useState(note.color);

    const presetColors = new Map ([
    ['green' , '#0cea7f'],
    ['yellow' , "#e2e239"],
    ['red' , '#da4130'],
    ['blue' , "#1d7fd0"]
    ])

    useEffect(()=> {
    const divArray = [];
        for(const colorKey of presetColors.keys()){
            divArray.push(<div onClick={presetColorSelectHandler} style={{backgroundColor:`${presetColors.get(colorKey)}`}} id={colorKey} className='color_div' key={colorKey}></div>)
        }
        setPresetColorDivArray(divArray);
    }, [])
    
    // triggers when the input color has been changed
    useEffect(()=> {
        optionChangeHandler();
        const updatedNote = {...note, color: inputColor};
        updateNote(updatedNote)
    },[inputColor])

    useEffect(()=> {
        console.log(hide)
        if(hide) setAnimationClassName('slideToTop')
        else setAnimationClassName('');
    },[hide])

    const presetColorSelectHandler = (event) => {
        setInputColor(presetColors.get(event.target.id))
    }

    const customColorSelectHandler = (event) =>{
        setInputColor(event.target.value);
    }


    return (
        <div className={`noteOption_container ${animationClassName}`}>
            <h6>Select a color for your note:</h6>
            <div className='presetColors_container'>
                {
                    presetColorDivsArray.map((div) => div)
                }                
            </div>
            <div className='customColor_container'>
                <h6>Custom color:</h6>
                <input type="color" className='customColor_input' onChange={customColorSelectHandler} value={inputColor}/>
            </div>
        </div>
    );
}

export default OptionPanel;