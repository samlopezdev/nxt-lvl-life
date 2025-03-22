import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes () {
    
    const isLoggedIn = window.localStorage.getItem("tokenId");

    return isLoggedIn ? <Outlet /> : <Navigate to='/login'/>
}