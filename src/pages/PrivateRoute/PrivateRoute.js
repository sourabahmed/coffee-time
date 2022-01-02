import React from 'react';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useFirebase();

    if (isLoading) {
        return (
            <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div>
            {user.email ? children : <Navigate to="/login" />}
        </div>
    );
};

export default PrivateRoute;