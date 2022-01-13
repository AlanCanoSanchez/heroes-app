
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardRouter } from './DashboardRouter';

import { LoginScreen } from '../components/Login/LoginScreen';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />    
                    </PublicRoute>                        
                    }                 
                />

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRouter />    
                    </PrivateRoute>                        
                    }                 
                />

            </Routes>
        </BrowserRouter>
    )
}
