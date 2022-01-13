
import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { useReducer } from 'react'
import { AuthContext } from './auth/authContext' // Como es el que provee a los componenetes hijos y todos los componenetes hijos estan 
// dentro de AppRouter es por eso que tenemos que colocarla en medio de nuestro authContext
import { authReducer } from './auth/authReducer'
import { useEffect } from 'react'

const init = () => {
    
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}



export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    // dispatch dispara las acciones a nuestro reducer

    useEffect(() => {
        if (!user) {
            return 
        }

        localStorage.setItem('user',JSON.stringify(user));
    }, [user])


    return (
        <>
            <AuthContext.Provider value={{
                user,
                dispatch
            }}
            >

                <AppRouter/>
                
            </AuthContext.Provider>
        </>
    )
}
