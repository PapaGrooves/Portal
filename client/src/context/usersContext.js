import { createContext, useReducer } from "react";

export const UsersContext = createContext()

export const usersReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                users: action.payload
            }
        case "CREATE_USER":
            return {
                users: [action.payload, ...state.users]
            }
        case "DELETE_USER":
            return {
                users: state.users.filter((u) => u._id !== action.payload._id)
            }
        case "UPDATE_USER":
            const updatedUsers = state.users.map((user) => {
                if (user._id === action.payload._id) {
                    return { ...user, ...action.payload.updatedUser };
                }
                return user;
            });
            return {
                users: updatedUsers,
            };

        default:
            return state;
    }
}

export const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, { users: [] })

    return (
        <UsersContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UsersContext.Provider>
    )
}