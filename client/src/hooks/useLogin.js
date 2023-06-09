import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()
    const { dispatch } = useAuthContext()
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/users/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })

        })
        console.log(response); // Check the response status and other details
        const json = await response.json();
        console.log(json); // Check the parsed JSON response

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save user to local storage
            localStorage.setItem("user", JSON.stringify(json))

            // update auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}