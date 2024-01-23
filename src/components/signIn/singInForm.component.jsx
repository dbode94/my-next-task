//TODO: ADD the functionalities of loging in and registering

import { useState } from 'react';

import './singInForm.style.scss'


const defaultForm = {
    email: '',
    password: ''
}

const SingInForm = () =>{

    const [formValues, setFormValues] = useState(defaultForm);
    const {email, password} = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
        resetValues();
        console.log(formValues);
    }

    const resetValues = () =>{
        setFormValues(defaultForm)

    }

    const changeHandler = (event) =>{
        const {type , value} = event.target; 
        setFormValues({...formValues, [type]: value});
    }

    return(
        <div className="singInForm_contaniner">
            <form className="singIn_form" onSubmit={handleSubmit}>
                <h3>Already have an account?</h3>
                <h5>Sign In:</h5>
                <input type="email" name="email" placeholder='email' required onChange={changeHandler} value={email}/>                
                <input type="password" name="password" placeholder='Password' required onChange={changeHandler} value={password}/>
                <br />
                <button type='submit'>Sign In</button>
                <button>Sign In with Google</button>
            </form>
        </div>
    )
}

export default SingInForm;