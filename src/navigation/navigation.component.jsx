//TODO: Display Log in / Register or Log out depending on log status : onClick => log off and redirect to '/'


import { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PreferenceContext } from '../context/preference.context';

import { ReactComponent as LightTheme } from '../assets/sun-svgrepo-com.svg';
import { ReactComponent as DarkTheme } from '../assets/moon-svgrepo-com.svg';

import logo from '../assets/icons8-note-96.png'
import './navigation.style.scss';


const Navigation = () =>{

    const {IslightTheme, setIsLightTheme} = useContext(PreferenceContext);

    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 650px)").matches);

    const changeHandler = (event) =>{
        setIsLargeScreen(event.matches)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 650px)");
        mediaQuery.addEventListener('change', changeHandler)
        document.body.classList.add('lightTheme_style');
    }, [])

    const clickHandler = () =>{
        const newIsLightTheme = !IslightTheme;

        setIsLightTheme(newIsLightTheme);
        
        if(newIsLightTheme) {
            document.body.classList.remove('darkTheme_style')
            document.body.classList.add('lightTheme_style');
        }
        else{
            document.body.classList.remove('lightTheme_style')
            document.body.classList.add('darkTheme_style');
        }
    }

    return(
        <Fragment>
            <div className='navigation_bar'>
                <div className='logo_container'>
                    <img src={logo} alt="noteLogo" className='logo'/>
                    {
                        isLargeScreen && <h3 className='logoName_header'>My-Next-Task</h3>  
                    }
                </div>
                <div className='option_container'>
                    <div className='contacts_container'>Contacts</div>
                </div>
                <div className='logAndTheme_Container'>
                    {
                        IslightTheme? <LightTheme onClick={clickHandler}/> : <DarkTheme onClick={clickHandler}/>
                    }
                    <Link to='/'> <button className='login_button' >Log in / Register</button> </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;