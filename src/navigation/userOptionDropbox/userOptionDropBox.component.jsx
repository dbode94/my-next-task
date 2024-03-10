import { ReactComponent as LightTheme } from '../../assets/sun-svgrepo-com.svg';
import { ReactComponent as DarkTheme } from '../../assets/moon-svgrepo-com.svg';
import { ReactComponent as AccountIcon } from '../../assets/user-alt-1-svgrepo-com.svg';
import { ReactComponent as ConnectionsIcon } from '../../assets/connection.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings-svgrepo-com.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout-2-svgrepo-com.svg';
import { ReactComponent as Dashboard } from '../../assets/note-2-svgrepo-com.svg';

import { useContext } from 'react';


import { UserContext } from '../../context/user.context';

import './userOptionDropBox.style.scss';

const UserOptionDropbox = ({actionHandlers}) => {
    const {singoutHandler, themeHandler, navigateToSettings, navigateToDashboard, navigateToAccount, navigateToConnections} = actionHandlers;

    const {IslightTheme} = useContext(UserContext);

    return(
        <div className='userOptions_container'>
            <div onClick={navigateToAccount}> <span>Account</span> <AccountIcon className='opions_svg'/> </div>
            <div onClick={themeHandler}>
                 <span>Theme</span>
                 {
                    IslightTheme? <LightTheme className='opions_svg'/> : <DarkTheme className='opions_svg'/> 
                 }  
            </div>
            <div onClick={navigateToConnections}> <span>Connections</span> <ConnectionsIcon className='opions_svg'/> </div>
            <div onClick={navigateToDashboard}> <span>Dashboard</span> <Dashboard className='opions_svg'/> </div>
            <div onClick={navigateToSettings}> <span>Settings</span> <SettingsIcon className='opions_svg'/> </div>
            <div onClick={singoutHandler}> <span>Logout</span> <LogoutIcon className='opions_svg'/> </div>
        </div>
    )
}

export default UserOptionDropbox;