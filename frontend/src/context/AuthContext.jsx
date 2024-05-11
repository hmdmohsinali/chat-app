import { createContext, useContext,useState } from "react";

export const AuthContext = createContext();


export const useAuthContext = () =>{
    return useContext(AuthContext)
}



export const AuthConetxtProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(localStorage.getItem('chat-user') || null);



    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
        </AuthContext.Provider>
    );
}
