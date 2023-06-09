import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()
    const { dispatch } = useAuthContext()
    
    const signup = async (email, fname, lname, dob, password, rpassword) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/users/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, fname, lname, dob, password, rpassword })

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

    return { signup, isLoading, error }
}