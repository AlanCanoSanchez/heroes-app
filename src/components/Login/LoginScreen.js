
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const [formValues, handleInputChange] =  useForm({
        name:''
    })

    const { name } = formValues;

    const navigate = useNavigate();

    const handleLogin = () => {

 
           const action = {
            type: types.login,
            payload: {
                name: name
            } 
        }

        dispatch(action);
        
        const lastPath = localStorage.getItem('lastPath') ||  '/marvel';
 
        navigate(lastPath,{
            replace:true
        }); 
    }


    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr/>

            
            <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                autoComplete="off"
                value={ name }
                onChange={handleInputChange}            
            />

            <button 
                type="button"
                className='btn btn-primary mt-5'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
