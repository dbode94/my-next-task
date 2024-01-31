//TODO: Update Context with handleSubmit
//TODO: Change handleSubmit to use FireBase
//TODO: Once logged in, change the background theme depending on the user preference.

import { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { regularSignIn, singInWithGooglePopOut } from '../../utils/firebase.utils';
import { UserContext } from '../../context/user.context';
import {ReactComponent as GoogleLogo} from '../../assets/google-icon-logo-svgrepo-com.svg'

import './singInForm.style.scss'


const defaultForm = {
    email: '',
    password: ''
}

const SingInForm = () => {

    const [formValues, setFormValues] = useState(defaultForm);
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {email, password} = formValues;
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();

        regularSignIn(formValues.email,formValues.password)
            .then((cred) => {
                console.log(cred.user)
                // setCurrentUser()
                navigate('tasks')
            })
            .catch(() => alert('user or password not found'));

        resetValues();
    }

    const resetValues = () =>{
        setFormValues(defaultForm)
    }

    const changeHandler = (event) =>{
        const {name , value} = event.target; 
        setFormValues({...formValues, [name]: value});
    }

    const  googleSignInHandler = () =>{
       singInWithGooglePopOut()
        .then((result) =>{
            console.log(result.user)
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="singInForm_contaniner">
            <form className="singIn_form" onSubmit={submitHandler}>
                <h3>Already have an account?</h3>
                <h5>Sign In:</h5>
                <input type="email" name="email" placeholder='email' required onChange={changeHandler} value={email}/>                
                <input type="password" name="password" placeholder='Password' required onChange={changeHandler} value={password}/>
                <br />
                <button type='submit'>Sign In</button>
                <button type='button' className='google_button' onClick={googleSignInHandler}><GoogleLogo className='google_logo'/>Sign In with Google</button>
            </form>
        </div>
    )
}

export default SingInForm;