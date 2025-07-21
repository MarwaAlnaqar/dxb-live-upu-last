import React from 'react';
import './QuestionsItemstyle.css';

export default function QuestionOption({ options }) {

  return (
    <div className="question-list">
      {options.map((item, index) => (
        <div key={index} className="option"   style={{
            background: `url(${item.box_bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center' // fallback color if no bg
          
          }}>
          <h3>{item.name}</h3>
     

          {/* You can uncomment this line if you want to show answers */}
          {/* <p>{item.answer}</p> */}
        </div>
       ))} 
    </div>
  );
}


