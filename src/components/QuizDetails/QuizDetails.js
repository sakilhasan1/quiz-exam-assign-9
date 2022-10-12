import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ans from '../Ans/Ans';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quiz = useLoaderData();

    const questions = quiz.data.questions;
    // const answers = quiz.data.questions;
    return (
        <div>
            <h1>Wellcome Our exam hall</h1>

            <div className='questions.container'>
                {
                    questions.map(question => <Question
                        question={question}
                        ans={question.options}

                    ></Question>)
                }
            </div>
            {/* 
            <div className='ans-container'>
                {
                    answers.map(ans => <Ans
                        key={ans.id}
                        ans={ans}
                    ></Ans>)
                }
            </div> */}


        </div>
    );
};

export default QuizDetails;