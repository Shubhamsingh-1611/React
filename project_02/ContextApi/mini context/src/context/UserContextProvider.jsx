import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children})=>{ // children is the html element that or the componebt
    const [user,setUser] = useState(null);
    return(
    <UserContext.Provider value={{user,setUser}}>   // value is the the the data that is accesable to all the children of the router provider
     {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider