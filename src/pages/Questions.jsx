import React, { useRef, useEffect } from 'react';
import './QuestionsPage.css';

import QuestionItem from '../Components/QuestionItem';
import QuestionOption from '../Components/QuestionOption';

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

const option = [
  {
    name: "Yes",
    box_bg: 'src/assets/upu/option_a.svg',
    percent: 60,
  },
  {
    name: "No",
    box_bg: 'src/assets/upu/option_b.svg',
    percent: 30,
  },
  {
    name: "Absent",
    box_bg: 'src/assets/upu/option_c.svg',
    percent: 10,
  },
];

const Questions = () => {



  
//    return (
//  <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );

  return (
<Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 120000 , disableOnInteraction: false }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
     
      {questions_data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="questions-container">
            <div className="logo">
              <img src="src/assets/upu/logos.svg" alt="logo" />
            </div>

            <div className="question-box">
              <div className="question-block">
                <QuestionItem question={item.question} />
                <QuestionOption options={option} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Questions;
