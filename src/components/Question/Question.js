import React from 'react';
import './Question.css'

const Question = ({ question, ans }) => {
    // console.log(question)
    console.log(ans);
    return (
        <div className='question'>
            <h4>Quiz:{question.question}</h4>

            <ul className='option'>
                <input type="radio" value="M" name="ge" /> {ans[0]}
                <input type="radio" value="M" name="ge" /> {ans[1]}
                <input type="radio" value="M" name="ge" /> {ans[3]}
            </ul>
        </div>
    );
};

export default Question;