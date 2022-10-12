import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizes = useLoaderData();
    // console.log(quizes)
    // console.log(quizes.data)
    return (
        <div className='quizes-container'>
            {
                quizes.map(quiz => <Quiz
                    // id={id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Topics;