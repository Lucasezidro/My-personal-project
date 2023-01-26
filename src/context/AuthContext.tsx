import { createContext } from "react";
import { firebase, auth } from "../lib/firebase"

type AuthContextProps = {
    children: React.ReactNode
}

type AuthContextData = {
    signInWithGoogle: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider (props: AuthContextProps) {
    async function signInWithGoogle () {
        const provider = new firebase.auth.GithubAuthProvider()
        const result = await auth.signInWithPopup(provider)

        return result;
    }

    return (
        <AuthContext.Provider value={{ signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}