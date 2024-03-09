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
    ['blue' , "#4290f0"],
    ['light' , "#bfbfbf"],
    ['dark' , "#302f2f"]
    ])

    useEffect(()=> {
    const divArray = [];
        for(const colorKey of presetColors.keys()){
            divArray.push(<div onClick={presetColorSelectHandler} style={{backgroundColor:`${presetColors.get(colorKey)}`}} id={colorKey} className='color_div' key={colorKey}></div>)
        }
        setPresetColorDivArray(divArray);
    }, [])

    useEffect(()=> {
        console.log(hide)
        if(hide) setAnimationClassName('slideToTop')
        else setAnimationClassName('');
    },[hide])

    const presetColorSelectHandler = (event) => {
        const newColor = presetColors.get(event.target.id);
        setInputColor(newColor);
        optionChangeHandler();
        const updatedNote = {...note, color: newColor};
        updateNote(updatedNote)
    }

    return (
        <div className={`noteOption_container ${animationClassName}`}>
            <div className='colorOptions_container'>
                <h6>Color:</h6>
                <div className='presetColors_container'>
                    {
                        presetColorDivsArray.map((div) => div)
                    }                
                </div>
            </div>
            <div className='otherOptions_container'>
                <button className='share_button'>Share</button>
            </div>
        </div>
    );
}

export default OptionPanel;