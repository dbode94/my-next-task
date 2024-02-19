
import './alertPrompt.style.scss'

const AlertPrompt = ({message, acceptedHandler, declinedHandler}) =>{
    return(
        <div className="alert_container">
            <p>
                {message}
            </p>
            <div className="alertButtons_container">
                <button className="accept_button alert_button" onClick={acceptedHandler}>Yes</button>
                <button className="decline_button alert_button" onClick={declinedHandler}>No</button>
            </div>
        </div>
    )
}

export default AlertPrompt;