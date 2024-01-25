import { createContext, useState} from "react";

export const PreferenceContext = createContext({
    IslightTheme: true,
    setIsLightTheme: () => {}
})


export const PrerenceProvider = ({children}) =>{
    const [IslightTheme, setIsLightTheme] = useState(true);

    const value = {IslightTheme,setIsLightTheme};
    
    return <PreferenceContext.Provider value={value}>{children}</PreferenceContext.Provider>
}