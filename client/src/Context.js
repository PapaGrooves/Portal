import React, { useState } from "react";
const context = React.createContext();

function AppContext({ children }) {

    const [dbData, setDbData] = useState();
    const [loading, setLoading] = useState(false);

    return <context.Provider value={{dbData, setDbData, loading, setLoading}}>{children}</context.Provider>


}

export { context, AppContext };