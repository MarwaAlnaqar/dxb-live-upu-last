import React from 'react';
import './QuestionsPage.css';

import QuestionItem from '../Components/QuestionItem';
import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added

// ✅ Questions list (all will share the same options)
const questions_data = [
  {
    question: "Which landmark holds the Guinness World Record for the tallest building in the world?",
    option : [
  {
    name: "Yes",
    box_bg: 'public/assets/upu/option_a.svg', // relative path
     percent: 60
  },
  {
    name: "No",
    box_bg: "public/assets/upu/option_b.svg",
     percent: 30
  },
  {
    name: "Absent",
    box_bg: "public/assets/upu/option_c.svg",
     percent: 90
  },]
  ,}
];



const QuestionAnalytics = () => {
  return (
    <div className="questions-container">
      <div className="logo">
        <img src="public/assets/upu/logos.svg" alt="logo" />
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
