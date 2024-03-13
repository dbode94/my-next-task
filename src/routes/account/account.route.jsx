import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

import { UserContext } from '../../context/user.context';
import './account.style.scss';

const Account = () => {
    const {currentUser} = useContext(UserContext);
    return(
        <div className='accountPage_container'>
            <h2>Account:</h2>
            <div className='accountInfo_container'>
                <div className='nameInfo_container info_container'>
                    <span className='info_title'>Display Name:</span>
                    <span>{currentUser.displayName}</span>
                </div>
                <div className='emailInfo_container info_container'>
                    <span className='info_title'>Email:</span>
                    <span>{currentUser.email}</span>
                </div>
                <div className='passwordInfo_container'>
                    <div className='info_container'>
                        <span className='info_title'>Password:</span> 
                        <span>****************</span>
                    </div>
                    <Link className='passwordReset_anchor' to="/update_password">Change Password</Link>
                </div>
            </div>
        </div>
    )
}

export default Account;