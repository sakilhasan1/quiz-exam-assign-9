import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { id, name, logo, } = quiz;
    return (
        <div className='quiz'>
            <img src={logo}></img>
            <h5>{name}</h5>
            <Link to={`/quiz/${id}`}><button>Start practice</button></Link>


        </div>
    );
};

export default Quiz;