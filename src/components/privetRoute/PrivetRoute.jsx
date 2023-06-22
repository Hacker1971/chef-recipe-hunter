import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation()
    console.log(location)
    if(loading){
        return 
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location.pathname}} to='/login'></Navigate>
};

export default PrivetRoute;