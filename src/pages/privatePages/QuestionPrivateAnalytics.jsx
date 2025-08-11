import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import '../QuestionsPage.css';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const QuestionPrivateAnalytics = () => {
  const data = {
    labels: ['Yes', 'No', 'Absent'],
    datasets: [
      {
        label: 'Responses',
        data: [11, 16, 7], // Only 3 values to match 3 labels
        backgroundColor: [
          '#A3DDFF',   // Yes
          '#036FAF',   // No
          '#475E6B',   // Absent
        ],
        borderWidth: 1,
      },
    ],
  };
const options = {
  cutout: '60%', // controls thickness of donut ring (default: '50%')
  plugins: {
    legend: {
      position: 'right', // or 'top', 'bottom'
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'right',
  //     },
  //   },
  // };
 
  return (
    <div className="questions-container" style={{ display:'flex',flexDirection:'column',  backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` ,justifyContent:'center',alignContent:'center', margin: '0 auto' }}>
          <div className="logo">
                    <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
                  </div>
      
                  <div className="question-box">
                    <div className="question-block">
                
                       <div className="question-list">
         
                <div  className="question-analytic-private">
       
            <h3>Which landmark holds the Guinness World Record for the tallest building in the world? </h3>
       
    
 
        
                </div>
       
            </div>
                      {/* <QuestionOption options={option} /> */}
                    </div>
                  </div>
                
      <div style={{maxWidth:700}}>
     {/* <PolarArea data={data} options={options} width={400} height={400} />
      */}
        <Doughnut data={data} options={options} width={400} height={400} />
      </div>
 
    </div>
  );
};

export default QuestionPrivateAnalytics;
