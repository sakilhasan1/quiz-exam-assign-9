import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quiz = useLoaderData();

    const questions = quiz.data.questions;
    // const answers = quiz.data.questions;
    return (
        <div>
            <h1 className='board ' >Wellcome Our Quiz Board</h1>

            <div className='questions.container'>
                {
                    questions.map(question => <Question
                        question={question}
                        ans={question.options}

                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;