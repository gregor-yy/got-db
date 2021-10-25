import React from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error"></img>
            <span>Что-то пошло не так</span>
        </>
    )
}

export default ErrorMessage;