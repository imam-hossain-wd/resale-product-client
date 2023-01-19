import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../contexts/authContext/AuthContext';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(userContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user){
        return children;
    }

    return <Navigate to="/singin" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;