import React from "react";
import { useAuthState } from "../context/AuthContext";
import { Redirect, Route} from "react-router-dom"

function AdminPrivateRoute({ children, ...rest }) {
    const { isAuthenticated, isAdmin } = useAuthState();

    return (
        <Route {...rest} render={() => {
            return isAuthenticated && isAdmin ? children : <Redirect to="/"/>
        }}/>
    );
}

export default AdminPrivateRoute;