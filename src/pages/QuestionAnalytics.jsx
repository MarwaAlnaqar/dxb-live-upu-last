import React from 'react';
import './QuestionsPage.css';

import QuestionItem from '../Components/QuestionItem';
import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added

const option_a = `${import.meta.env.BASE_URL}/assets/upu/option_a.svg`;
const option_b = `${import.meta.env.BASE_URL}/assets/upu/option_b.svg`;

const option_c = `${import.meta.env.BASE_URL}/assets/upu/option_c.svg`;
// ✅ Questions list (all will share the same options)
const questions_data = [
  {
    question: "Which landmark holds the Guinness World Record for the tallest building in the world?",
    option : [
  {
    name: "Yes",
     box_bg: option_a,// relative path
     percent: 60
  },
  {
    name: "No",
     box_bg: option_b,
     percent: 30
  },
  {
    name: "Absent",
      box_bg: option_c,
     percent: 90
  },]
  ,}
];






const QuestionAnalytics = () => {
  return (
    <div className="questions-container" style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` 
}}>
      <div className="logo">
          <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
      </div>

      <div className="question-box">
        {questions_data.map((item, index) => (
          <div key={index} className="question-block">

            <QuestionItem question={item.question} />
            <QuestionOptionChart options={item.option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnalytics;
