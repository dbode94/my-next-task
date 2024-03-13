import { ReactComponent as ClosedEyeSVG } from '../../assets/eye-closed-svgrepo-com.svg';
import { ReactComponent as OpennedEyeSVG } from '../../assets/eye-svgrepo-com.svg';

import { updateUserPassword } from '../../utils/firebase.utils';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

import './updatePasswordForm.style.scss';
import { useEffect, useState } from 'react';

const defaultFormValues = {
    oldPassword: '',
    newPassword:'',
    confirmedPassword:''
}

const UpdatePasswordForm = () => {

    const navigate = useNavigate();
    const updateSuccessNotification = (message) => toast.success(message);
    const updateFailedNotification = (message) => toast.error(message)
    const [formValues, setFormValues] = useState(defaultFormValues);
    const {oldPassword, newPassword, confirmedPassword} = formValues;
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState('password');
    const cancelOnclickHandler = () => {
        navigate('/control_panel/account');
    }

    const toggleShowPasswordHandler = () =>{
        setShowPassword(!showPassword);
    }

    useEffect(()=>{
        if(showPassword) setType('text');
        else setType('password');
    },[showPassword])

    //TODO: Success toast does not appear as we are moving back to the control_panel/account - show the toast in account
    const updatePasswordHandler = (event) => {
        event.preventDefault();
        const wrongMatchingMessage = 'New and Confirmed password do not match';
        if(confirmedPassword.length !== newPassword.length){
            updateFailedNotification(wrongMatchingMessage);
            return;
        }
        for(let i = 0; i < confirmedPassword.length; i++)
            if(confirmedPassword[i] !== newPassword[i]){
                updateFailedNotification(wrongMatchingMessage);
                return;
            }

        updateUserPassword(oldPassword, newPassword)
            .then(() => {
                updateSuccessNotification('Password updated successfully');
                setTimeout(() => navigate('/control_panel/account'), 1000);
            })
            .catch((err) => updateFailedNotification(err.message))

    }   

    const inputValueChangeHandler = (event) =>{
        const {name, value} = event.target;
        setFormValues({...formValues, [name]:value});
    }
    //TODO: Add the option to show password
    return(
        <div className='updatePasswordForm_container'>
            <h2>Update Password</h2>
            <div className='svg_container' onClick={toggleShowPasswordHandler}>
                {
                    showPassword? <OpennedEyeSVG/> : <ClosedEyeSVG/>
                }
            </div>
            <form className='updatePassword_form' onSubmit={updatePasswordHandler}>
                <input type={type} name="oldPassword" placeholder='Current password' onChange={inputValueChangeHandler} required value={oldPassword}/>
                <input type={type} name='newPassword' placeholder='New password' onChange={inputValueChangeHandler} required value={newPassword}/>
                <input type={type} name='confirmedPassword' placeholder='Confirm new password' onChange={inputValueChangeHandler} required value={confirmedPassword}/>
                <div className='updatePasswordButton_container'>
                    <button type='submit' className='updatePasswordSubmit_button'>Update</button>
                    <button className='updatePasswordCancel_button' type='button' onClick={cancelOnclickHandler}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePasswordForm;