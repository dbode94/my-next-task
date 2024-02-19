import { createContext, useState} from "react";
import { signUserOut } from '../utils/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    currentUserId: null,
    setCurrentUserId: () => null,
    IslightTheme: true,
    setIsLightTheme: () => {},
    logUserOut: () => {}
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState('')
    const [currentUserId, setCurrentUserId] = useState('');
    const [IslightTheme, setIsLightTheme] = useState(true);
    
    const logUserOut = () =>{
        signUserOut()
            .then( () =>{
                setCurrentUser('');
            })
            .catch((err) => console.log(err.message));
    }

    const value = {currentUser, setCurrentUser, currentUserId, setCurrentUserId, IslightTheme, setIsLightTheme, logUserOut};
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}