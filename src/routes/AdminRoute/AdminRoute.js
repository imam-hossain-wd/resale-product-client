import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../contexts/authContext/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../pages/Shared/loading/Loading';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(userContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/singin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;