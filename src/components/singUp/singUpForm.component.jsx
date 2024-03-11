//TODO: Update Context with handleSubmit
//TODO: Change handleSubmit to use FireBase

import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../utils/firebase.utils';

import './singUpForm.style.scss'

const defaultForm = {
    displayName: '',
    email: '',
    password: ''
}

const SingUpForm = () =>{

    const [formValues, setFormValues] = useState(defaultForm);
    const {displayName, email, password} = formValues;
    const {setCurrentUser, IslightTheme, setCurrentUserId} = useContext(UserContext);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = await registerNewUser(formValues.displayName, formValues.email, formValues.password, {IslightTheme});

        if(user){
            setCurrentUser(user);
            setCurrentUserId(user.uid)
            navigate('dashboard')
        }

        resetValues();
    }

    const resetValues = () =>{
        setFormValues(defaultForm)
    }

    const changeHandler = (event) =>{
        const {name , value} = event.target; 
        setFormValues({...formValues, [name]: value});
    }

    return(
        <div className="singUpForm_contaniner">
            <form className="singUp_form" onSubmit={handleSubmit}>
                <h3>You don't?</h3>
                <h5>Sing Up:</h5>
                <input type="text" name="displayName" placeholder='Display Name' onChange={changeHandler} required value={displayName}/>
                <input type="email" name="email" placeholder='email' onChange={changeHandler} required value={email}/>   
                <input type="password" name="password" placeholder='Password' onChange={changeHandler} required value={password}/>
                <br />
                <button type='submit' >Register</button>
            </form>
        </div>
    )
}

export default SingUpForm;