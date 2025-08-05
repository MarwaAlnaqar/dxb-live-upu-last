import React from 'react';
import './QuestionsItemstyle.css';
export default function QuestionItem({ question  }) {
  console.log(question)
  return (
    //    <div className="container">
   
      <div className="question-list">
        {/* {questions.map((item, index) => ( */}
          <div  className="question" style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/question-box.svg)` 
}}>
            <h3>{question}</h3>
            {/* <p>{item.answer}</p> */}
          </div>
        {/* ))} */}
      </div>
 

  );
};

