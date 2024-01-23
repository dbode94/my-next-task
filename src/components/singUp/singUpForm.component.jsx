import './singUpForm.style.scss'

const SingUpForm = () =>{
    return(
        <div className="singUpForm_contaniner">
            <form className="singUp_form">
                <h3>You don't?</h3>
                <h5>Sing Up:</h5>
                <input type="text" name="firstName" placeholder='First Name'  required/>
                <input type="text" name="lastName" placeholder='Last Name'  required/>
                <input type="email" name="email" placeholder='email' required/>                
                <input type="password" name="password" placeholder='Password' required/>
                <br />
                <button>Register</button>
                <button>Register with Google</button>
            </form>
        </div>
    )
}

export default SingUpForm;