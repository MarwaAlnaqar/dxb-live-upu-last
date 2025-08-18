import React, { useRef, useEffect } from 'react';
import '../QuestionsPage.css';

import QuestionItem from '../../Components/QuestionItem';
import QuestionOption from '../../Components/QuestionOption';

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
// ✅ Questions list (each will be a separate slide)
const questions_data = [
  {
    question: "Which landmark holds the Guinness World Record for the tallest building in the world?",
  },
  {
    question: "What is the capital of France?",
  },
  {
    question: "Who painted the Mona Lisa?",
  },
];



const QuestionsPrivate = () => {


  const [name, setName] = useState('');
  const [percent, setPercent] = useState(0); // Default to 50%

  const chartData = {
    labels: [name || ''],
    datasets: [
      {
        data: [percent],
        backgroundColor: '#95E5FF',
        barThickness: 90,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { min: 0, max: 100, display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };


  return (

     
    
          <div className="questions-container" style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` 
}}>
            <div className="logo">
              <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
            </div>

            <div className="question-box">
              <div className="question-block">
          
                <div className="question-list">
   
                   <div  className="question"style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/question-box.svg)` 
}}>
                      <textarea rows={3}
                        className="question-input"
                        placeholder="please enter your question"
                      // adjust initial height
                      />
  
                    </div>
 
                </div>
                {/* chart */}
                  <div  className="option-chart-row" style={{ marginLeft:80,marginRight:80 }}>
                            <div
                              className="option-box w-700"
                              style={{
                                backgroundImage: `url(${import.meta.env.BASE_URL}/assets/upu/Group_1199.svg)`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                marginRight:40,
                                backgroundPosition: 'center'
                              }}
                            >
                               <div
                            className='w-100'
                              style={{
                                display:'flex',
                                padding:10
                              }}
                            >
                            <input
                            className="option-name-input"
                            style={{marginLeft:90}}
                            type="text"
                            placeholder="Option Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
 <input
  type="number"
  className="percent-input no-spinner"
  value={percent}
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 100) {
      setPercent(value);
    } else if (e.target.value === "") {
      setPercent("");
    }
  }}
  min="0"
  max="100"
/>
                            </div>
                            </div>
                   {percent !== 0 && percent && (
                            <div className="option-chart-container">
                              <div className="option-chart">
                                <Bar data={chartData} options={chartOptions} />
                              </div>
                              <div className="option-percent">
                                {percent}%
                              </div>
                            </div> )} 
                          </div>  
               
                  </div>
            </div>
          </div>
    

  );
};

export default QuestionsPrivate;

