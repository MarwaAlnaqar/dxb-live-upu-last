

import './QuestionsItemChart.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
export default function OptionWithChart({ options, customeOption = false }) {
  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 100,
        display: false,
      },
      y: {
        display: false,
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  if (!customeOption) {
    return (
      <div
        className="option-chart-list"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 80
        }}
      >
        {options.map((option, index) => {
          const chartData = {
            labels: [option.name],
            datasets: [
              {
                data: [option.percent],
                backgroundColor: '#95E5FF',
                barThickness: 90,
              }
            ]
          };

          return (
            <div key={index} className="option-chart-row">
              <div
                className="option-box w-700"
                style={{
                  backgroundImage: `url(${option.box_bg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <h3>{option.name}</h3>
              </div>

              <div className="option-chart-container">
                <div className="option-chart">
                  <Bar data={chartData} options={chartOptions} />
                </div>
                <div className="option-percent">{option.percent}%</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (customeOption) {
    return (
      <div
        className="option-chart-list"
        style={{
          marginTop:14,
          flexDirection: 'column',
           justifyContent: 'center',
          // justifyContent: 'space-between',
        
        }}
      >
        {options.map((option, index) => {
          const chartData = {
            labels: [option.name],
            datasets: [
              {
                data: [option.percent],
                backgroundColor: '#95E5FF',
                barThickness: 90,
              }
            ]
          };

          return (
            <div key={index} className="option-chart-row" style={{gap:50,marginBottom:30}}>
              <div
                className="option-box w-700"
                style={{
                  width: 900,
                  height:200,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'white',
                  zIndex: 100000,
                  position: 'relative',
                  margin: 12,
                  borderRadius: 'unset'
                }}
              >
                <div
                  className="option-box w-700"
                  style={{
                    width: 900,
                    height:200,
                    margin: 12,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 10,
                    borderRadius: 'unset',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                background: `radial-gradient(circle, #0073C0 0%, #005C97 100% ,#004774   60%, #003B5E 80% ,#003757 100%)`,
                  }}
                >
                  <h3 style={{ padding: '0px 24px' }}>
                    {option.name}
                  </h3>
                  <h3
                    style={{
                      padding: '11px 24px',
                      border: '3px solid white',
                      background: 'white',
                      color: '#003858',
                      marginBottom: '23px'
                    }}
                  >
                    50
                  </h3>
                </div>
              </div>

              <div className="option-chart-container">
                <div className="option-chart">
                  <Bar data={chartData} options={chartOptions} />
                </div>
                <div className="option-percent" >{option.percent}%</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


// export default function OptionWithChart({ options,customeOption=false}) {

//   const chartOptions = {
//           indexAxis: 'y',
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               min: 0,
//               max: 100,
//               display: false,
//             },
//             y: {
//               display: false,
//             }
//           },
//           plugins: {
//             legend: { display: false },
//             tooltip: { enabled: false }
//           }
//         };
//     if(!customeOption){
//       return (
//         <div className="option-chart-list" style={{flexDirection:'row',
//           justifyContent: 'center',
//         marginTop:80}}>
//           {options.map((option, index) => {
//             const chartData = {
//               labels: [option.name],
//               datasets: [
//                 {
//                   data: [option.percent],
//                   backgroundColor: '#95E5FF',
//                   barThickness: 90,
//                 }
//               ]
//             };

          
//                   if(!customeOption){

//                       return (
//                             <div key={index} className="option-chart-row">
//                               <div
//                                 className="option-box w-700"
//                                 style={{
//                                   backgroundImage: `url(${option.box_bg})`,
//                                   backgroundSize: 'contain',
//                                   backgroundRepeat: 'no-repeat',
//                                   backgroundPosition: 'center'
//                                 }}
//                               >
//                                 <h3>{option.name}</h3>
//                               </div>

//                               <div className="option-chart-container">
//                                 <div className="option-chart">
//                                   <Bar data={chartData} options={chartOptions} />
//                                 </div>
//                                 <div className="option-percent">
//                                   {option.percent}%
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                   }
//       })}
//         </div>
//       );
//     }
//   if(customeOption){
//     return (
//     <div className="option-chart-list" style={{flexDirection:'row',
//       justifyContent: 'center',
//     marginTop:80}}>
//       {options.map((option, index) => {
//         const chartData = {
//           labels: [option.name],
//           datasets: [
//             {
//               data: [option.percent],
//               backgroundColor: '#95E5FF',
//               barThickness: 90,
//             }
//           ]
//         };
                                                                        
//         <div key={index} className="option-chart-row"  >
//           <div
//             className="option-box  w-700"
//             style={{width:500,borderWidth:1,borderStyle:'solid',borderColor:'white', zIndexndex: 100000,position: 'relative',margin :12,borderRadius:'unset'
          
//             }}
//           >
//             <div
//             className="option-box w-700"
//             style={{width:500,margin:12,borderWidth:1,borderStyle:'solid',borderColor:'white',    position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 zIndexndex: 10,borderRadius:'unset',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',background: '#003555'
                        
//                           }}
//                         >
//                           <h3 style={{padding:'0px 24px',marginBottom: '23px'}}>{option.name}</h3>
//                               <h3 style={{padding:'0px 23px',marginbottom:44,
//                 padding: '11px 24px',
//                 border: '3px solid white',
//                 background: 'white',
//                 color: '#003858' ,marginBottom: '23px'}}>50</h3>
//                           </div>
//                         </div>

//                         <div className="option-chart-container">
//                           <div className="option-chart">
//                             <Bar data={chartData} options={chartOptions} />
//                           </div>
//                           <div className="option-percent">
//                             {option.percent}%
//                           </div>
//                         </div>
//                       </div>
    
//     })}
//     )}




// }