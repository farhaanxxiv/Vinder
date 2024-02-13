import React, { useState, useEffect, useContext, createContext } from 'react';
import { firebaseAuth } from '../scripts/init-firebase';

// Create the AuthContext
const AuthContext = createContext();

// Create a hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        currentUser,
        isLoggedIn: currentUser !== null,
    };

    return (
        <AuthContext.Provider value={value}>
            {(!loading) && children}
        </AuthContext.Provider>

    );
};
