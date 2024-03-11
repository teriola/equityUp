import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});

    const setUser = (user) => {
        setAuth(user);
    }

    const clearUser = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{ auth, setUser, clearUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}