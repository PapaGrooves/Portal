import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: {...state.user,  ...action.payload} }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
      const fetchUserInformation = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          try {
            const response = await axios.get("/api/users", {
              headers: {
                Authorization: `Bearer ${user.token}`
              }
            });            
            const additionalUserInfo = response.data; // Assuming response contains the additional user information
            dispatch({ type: "LOGIN", payload: additionalUserInfo });
          } catch (error) {
            console.log("Failed to fetch user")
          }
        }
      };
    
      fetchUserInformation();
    }, []);
    

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}