import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ans from '../Ans/Ans';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions[0].options);
    const questions = quiz.data.questions;
    const answers = quiz.data.questions[0].options;
    return (
        <div>
            <h1>Wellcome Our exam hall</h1>
            <div className='questions.container'>
                {
                    questions.map(question => <Question
                        question={question}

                    ></Question>)
                }
            </div>

            {
                answers.map(ans => <Ans
                    ans={ans}
                ></Ans>)
            }
            {/* <h4>Quiz: {quiz.data.questions[0].question}</h4> */}


            {/* <p>{quiz.data.questions[0].options}</p> */}

        </div>
    );
};

export default QuizDetails;