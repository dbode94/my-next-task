import { ReactComponent as AccountIcon } from '../../assets/user-alt-1-svgrepo-com.svg';
import { ReactComponent as ConnectionsIcon } from '../../assets/connection.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings-svgrepo-com.svg';

import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './controlPanel.style.scss';

const ControlPanel = () => {
    const location = useLocation();

    useEffect(()=> {
        const tab = document.getElementsByClassName(location.pathname.split('/')[2]);
        tab[0].focus();
    },[location])    

    return(
        <div className='controlPanel_Container'>
            <div className='controlPanel_tabs'>
                <Link className='tab account' to={'./account'}> <AccountIcon className='controlTabs_svg'/> Account </Link>
                <Link className='tab connections' to={'./connections'}> <ConnectionsIcon className='controlTabs_svg'/> Connections </Link>
                <Link className='tab settings' to={'./settings'}><SettingsIcon className='controlTabs_svg'/> Settings</Link>
            </div>
            <hr />
            <div className='tab_page'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ControlPanel;