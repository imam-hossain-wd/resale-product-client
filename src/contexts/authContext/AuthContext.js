import React, { createContext } from 'react';

export const userContext = createContext()
const AuthContext = ({children}) => {

    const user = {
        name: 'Rahim'
    }
    return (
        <userContext.Provider value={user}>
            {children}
            
        </userContext.Provider>
    );
};

export default AuthContext;