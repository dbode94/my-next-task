import { createContext, useState} from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    currentUserId: null,
    setCurrentUserId: () => null,
    IslightTheme: true,
    setIsLightTheme: () => {}
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState('')
    const [currentUserId, setCurrentUserId] = useState('');
    const [IslightTheme, setIsLightTheme] = useState(true);

    const value = {currentUser, setCurrentUser, currentUserId, setCurrentUserId, IslightTheme, setIsLightTheme};
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}