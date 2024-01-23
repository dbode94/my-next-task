import './singInForm.style.scss'

const SingInForm = () =>{
    return(
        <div className="singInForm_contaniner">
            <form className="singIn_form">
                <h3>Already have an account?</h3>
                <h5>Sign In:</h5>
                <input type="email" name="email" placeholder='email' required/>                
                <input type="password" name="password" placeholder='Password' required/>
                <br />
                <button>Sign In</button>
                <button>Sign In with Google</button>
            </form>
        </div>
    )
}

export default SingInForm;