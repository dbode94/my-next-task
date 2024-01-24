import { useState } from 'react';

import './singUpForm.style.scss'

const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const SingUpForm = () =>{

    const [formValues, setFormValues] = useState(defaultForm);
    const {firstName, lastName, email, password} = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues)
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
                <input type="text" name="firstName" placeholder='First Name' onChange={changeHandler} required value={firstName}/>
                <input type="text" name="lastName" placeholder='Last Name'  onChange={changeHandler} required value={lastName}/>
                <input type="email" name="email" placeholder='email' onChange={changeHandler} required value={email}/>   
                <input type="password" name="password" placeholder='Password' onChange={changeHandler} required value={password}/>
                <br />
                <button>Register</button>
                <button>Register with Google</button>
            </form>
        </div>
    )
}

export default SingUpForm;