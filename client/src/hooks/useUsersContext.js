import { UsersContext } from "../context/usersContext";
import { useContext } from "react";

export const useUsersContext = () => {
    const context = useContext(UsersContext)

    if (!context) {
        throw Error("useUserContext must be used inside a UserContextProvider")
    }

    return context
}