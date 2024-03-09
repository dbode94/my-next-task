
import { ReactComponent as UserIcon } from '../../assets/user-circle-svgrepo-com.svg';

import './userButton.style.scss';



const UserButton = ({toggleUserDropboxHandler}) => {
    return(
        <div className='userButton_container'>
            <UserIcon onClick={toggleUserDropboxHandler}/>
        </div>
    )
}
export default UserButton;