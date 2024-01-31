//TODO: Display Log in / Register or Log out depending on log status : onClick => log off and redirect to '/'


import { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

import { ReactComponent as LightTheme } from '../assets/sun-svgrepo-com.svg';
import { ReactComponent as DarkTheme } from '../assets/moon-svgrepo-com.svg';

import { signUserOut } from '../utils/firebase.utils';

import logo from '../assets/icons8-note-96.png'
import './navigation.style.scss';


const Navigation = () =>{

    const userIsLogged = true;
    const navigate = useNavigate();
    const {IslightTheme, setIsLightTheme} = useContext(UserContext);
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 650px)").matches);

    const changeHandler = (event) =>{
        setIsLargeScreen(event.matches)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 650px)");
        mediaQuery.addEventListener('change', changeHandler)
        document.body.classList.add('lightTheme_style');
    }, [])

    const themeHandler = () =>{
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

    const singoutHandler = () =>{
        signUserOut()
            .then(console.log('Logged out succesfully'))
            .catch((err) => console.log(err.message));
        navigate('/');
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
                        IslightTheme? <LightTheme onClick={themeHandler}/> : <DarkTheme onClick={themeHandler}/>
                    }
                    {
                        userIsLogged? <button className='log_button' onClick={singoutHandler}>Log out</button> : <button className='log_button'>Log in / Register</button>    
                    }                 
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;