import React, { createContext, useState } from 'react';


export const userContext = createContext()

export default function UserProvider(props) {

    const [userinfo, setuserInfo] = useState({
        title:"FrontEnd Engineer",
        username: "reach2Sanket",
        activeProfileId: "7385"
      })


    return <div>
        <userContext.Provider value={userinfo}>
            {props.children}

        </userContext.Provider>

    </div>;
}
