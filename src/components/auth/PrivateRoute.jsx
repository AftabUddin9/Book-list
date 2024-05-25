import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuthenticate = () => {
    return false;
}

const PrivateRoute = () => {
    const isAuthenticated = useAuthenticate();
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute