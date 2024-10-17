import React, { useContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const SessionContext = React.createContext({})

// definiamo il context
export function useSessionContext() {
    return useContext(SessionContext)
}

function SessionProvider({ children }) {

    const [session, setSession] = useState()
    const [loading, setLoading] = useState(true)

    const posts = [
        {
            name: 'Ezio greggio',
            image: '../assets/soldier.png',
            description: 'This is the America FUck YEAH !!!!!'
        },
        {
            name: 'Ezio greggio',
            image: '../assets/animale3.jpg',
            description: 'la descrizione arriva dalla pagina mo'
        },
    ];

    useEffect(() => {
        loadSession()
    }, [])

    async function loadSession() {
        const savedSession = await AsyncStorage.getItem('@user_session')
        setLoading(false)
        console.log(savedSession)
        if (savedSession) {
            setSession(JSON.parse(savedSession))
        }
    }

    async function logout() {
        await AsyncStorage.removeItem('@user_session')
        setSession(null)
    }

    async function login(newSession) {
        console.log(newSession)
        await AsyncStorage.setItem('@user_session', JSON.stringify(newSession))
        setSession(newSession)
    }

    const data = {
        session: session,
        setSession: setSession,
        logout: logout,
        login: login,
        loading: loading,
        setLoading: setLoading,
        posts: posts,
    }

    return (
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider