import React from 'react';
import './Question.css'

const Question = ({ question }) => {
    // console.log(question)
    return (
        <div className='question'>
            <h5>Quiz:{question.question}</h5>
        </div>
    );
};

export default Question;