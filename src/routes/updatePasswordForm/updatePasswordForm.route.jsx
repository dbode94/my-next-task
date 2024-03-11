import { useNavigate } from 'react-router-dom';

import './updatePasswordForm.style.scss';

const UpdatePasswordForm = () => {
    const navigate = useNavigate();

    const cancelOnclickHandler = () => {        
        navigate('/control_panel/account');
    }

    return(
        <div className='updatePasswordForm_container'>
            <h2>Update Password</h2>
            <form className='updatePassword_form'>
                <input type="password" name="oldPassword" placeholder='Old password'/>
                <input type="password" name='newPassword' placeholder='New password'/>
                <input type="password" name='confirmedPassword' placeholder='Confirm new password'/>
                <div className='updatePasswordButton_container'>
                    <button type='submit' className='updatePasswordSubmit_button'>Update</button>
                    <button className='updatePasswordCancel_button' type='button' onClick={cancelOnclickHandler}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePasswordForm;