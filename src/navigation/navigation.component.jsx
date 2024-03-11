import { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { UserContext } from '../context/user.context';
import { NotesContext } from '../context/notes.context';

import { ReactComponent as LightTheme } from '../assets/sun-svgrepo-com.svg';
import { ReactComponent as DarkTheme } from '../assets/moon-svgrepo-com.svg';
import AlertPrompt from '../components/alertMessage/alertPrompt.component';
import SearchConnection from './searchConnection/searchConnection.component';
import UserButton from './userButton/userButton.Component';
import UserOptionDropbox from './userOptionDropbox/userOptionDropBox.component';

import logo from '../assets/icons8-note-96.png'
import './navigation.style.scss';


const Navigation = () =>{

    const navigate = useNavigate();
    const {currentUser, currentUserId,IslightTheme, setIsLightTheme, logUserOut} = useContext(UserContext);
    const {lastContextChangeDate, lastDBChangeDate, saveAllChanges} = useContext(NotesContext);
    const [haveUnsaveChanges, setHaveUnsaveChanges] = useState(false);
    const [userDropboxIsOpen, setUserDropboxIsOpen] = useState(false);

    useEffect(() => {
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

    const singoutHandler = async () =>{
        console.log(lastContextChangeDate);
        console.log(lastDBChangeDate);
        if(lastContextChangeDate > lastDBChangeDate) setHaveUnsaveChanges(true);
        else {
            await logUserOut();        
        navigate('/');
        }
    }

    const acceptedHandler = async () => {
        await saveAllChanges(currentUserId);
        setHaveUnsaveChanges(false);
        await logUserOut();        
        navigate('/');
    }

    const declinedHandler = async () => {
        setHaveUnsaveChanges(false);
        await logUserOut();        
        navigate('/');    
    }

    const navigateToSettingsHandler = () => {
        navigate('/control_panel/settings');
        if(userDropboxIsOpen) toggleUserDropboxHandler();  
    }

    const navigateToAccountHandler = () => {
        navigate('/control_panel/account');
        if(userDropboxIsOpen) toggleUserDropboxHandler();  
    }

    const navigateToConnectionsHandler = () => {
        navigate('/control_panel/connections');
        if(userDropboxIsOpen) toggleUserDropboxHandler();  
    }

    const navigateToDashboardHandler = () => {
        navigate('/dashboard');
        if(userDropboxIsOpen) toggleUserDropboxHandler();       
    }

    const toggleUserDropboxHandler = () => setUserDropboxIsOpen(!userDropboxIsOpen);

    const handlers = {
        navigateToDashboard: navigateToDashboardHandler,
        navigateToSettings: navigateToSettingsHandler, 
        navigateToAccount: navigateToAccountHandler,
        navigateToConnections: navigateToConnectionsHandler,
        singoutHandler: singoutHandler, 
        themeHandler: themeHandler
    }
    
    return(
        <Fragment>
            <div className='navigation_bar'>
                <div className='logo_container' onClick={navigateToDashboardHandler}>
                    <img src={logo} alt="noteLogo" className='logo'/>
                </div>
                <SearchConnection/>
                {
                    currentUser? <UserButton toggleUserDropboxHandler={toggleUserDropboxHandler}/> : null
                }
                {
                    userDropboxIsOpen && currentUser? <UserOptionDropbox actionHandlers={handlers}/> : null
                }               
            </div>
            <Outlet/>
            {
                haveUnsaveChanges && <div className="alertComponent_container"> <AlertPrompt message={'Would you like to save all outstanding changes?'} acceptedHandler={acceptedHandler} declinedHandler={declinedHandler}/></div>
            }
        </Fragment>
    )
}

export default Navigation;