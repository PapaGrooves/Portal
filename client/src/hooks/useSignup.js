import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, fname, lname,  password, rpassword, dob) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:4000/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, fname, lname, password, rpassword, dob }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            // Save user to local storage
            localStorage.setItem("user", JSON.stringify(data));

            // Update auth context
            dispatch({ type: "LOGIN", payload: data });

            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
