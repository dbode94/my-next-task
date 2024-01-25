import SingInForm from "../../components/signIn/singInForm.component";
import SingUpForm from "../../components/singUp/singUpForm.component";
import {ReactComponent as FormLogo} from '../../assets/check-list-notepad-svgrepo-com.svg'

import './authentication.style.scss'

const Authentication = () =>{
    return(
        <div className="logIn_container">
            <div className="welcomeHeader_container">
                <FormLogo className="logo"/>
                <h2>Hi ! <br /> Welcome to <br /> Next-Task App</h2>
                <br />
                <h3>The only task tracker <br /> you'll ever need</h3>
            </div>
            <div className="logInForms_container">
                <SingInForm/>
                <br />
                <br />
                <SingUpForm/>
            </div>
        </div>
    )
}

export default Authentication;