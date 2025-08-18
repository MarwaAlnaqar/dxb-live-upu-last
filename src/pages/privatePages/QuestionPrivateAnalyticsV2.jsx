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

const QuestionPrivateAnalyticsV2 = () => {
  const data = {
    labels: ['Yes', 'No', 'Abstain'],
    datasets: [
      {
        label: 'Responses',
        data: [11, 16, 7], // Only 3 values to match 3 labels
        backgroundColor: [
          '#22ad22',   // Yes
          'red',   // No
          'yellow',   // Abstain
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
          <div className="logo" style={{marginBottom:18}}>
                    <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
                  </div>
      
                  <div className="question-box">
                    <div className="question-block" style={{padding:0,display:'flex',justifyContent:'space-around',boxShadow:'none'}}>
                
                      {/* <div className="question-list" style={{justifyContent:'space-around'}}> */}
         
                          <div  className="question-analytic-private-V2">
                
                            <h3>Which landmark holds the Guinness World Record for the tallest building in the world? </h3>
                
              
          
                  
                          </div>
                          <div style={{maxWidth:700}}>
      
                          <Doughnut data={data} options={options} width={700} height={700} />
                        </div>
       
                      {/* </div> */}
                      {/* <QuestionOption options={option} /> */}
                    </div>
                  </div>
                  {/* <div style={{position:'relative',zIndex:48}}>
                     <div style={{width:200,height:160,borderColor:'white',borderWidth:1,borderStyle:'solid ',zIndex:100, backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/BG.svg)` }}></div>
    <div style={{position:'absolute',top:-10,left:5,width:200,height:160,borderColor:'red',borderWidth:1,borderStyle:'solid '}}>

      hi
    </div>
                  </div> */}
                

 
    </div>
  );
};

export default QuestionPrivateAnalyticsV2;
