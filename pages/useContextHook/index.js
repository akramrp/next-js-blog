import React, { useState } from "react";
import Auth from "./Auth";
import AuthContext from "./auth-context";
import Title from '../../components/Title'

export default function useContextHook() {
    //using the state to dynamicallly pass the values to the context
    const [authstatus, setauthstatus] = useState(false);
    const login = () => {
        setauthstatus(true);
    };

    return (
        <>
            <Title title="useContextHook" />
            <h1>useContextHook Page</h1>
            <AuthContext.Provider value={{ status: authstatus, login: login }}>
                <Auth />
            </AuthContext.Provider>
        </>
    )
}