import React from "react";
import './QuestionsItemstyle.css';
export default function  OptionBox  ({ label, count,isWhite=false }) {
  return (
    <div
className="option-box-container"     
    >
      <h3 className="option-box-title" >{label}</h3>
      <div className="option-box-count"
      
      >
        {count}
      </div>
    </div>
  );
};
