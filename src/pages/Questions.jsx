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
const option_a = `${import.meta.env.BASE_URL}/assets/upu/option_a.svg`;
const option_b = `${import.meta.env.BASE_URL}/assets/upu/option_b.svg`;

const option_c = `${import.meta.env.BASE_URL}/assets/upu/option_c.svg`;



const option = [
  {
    name: "Yes",
    box_bg: option_a,
    percent: 60,
  },
  {
    name: "No",
    box_bg: option_b,
    percent: 30,
  },
  {
    name: "Abstain",
    box_bg: option_c,
    percent: 10,
  },
];
const logo= `${import.meta.env.BASE_URL}/assets/upu/logos.svg`;
const Questions = () => {



  


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
          <div className="questions-container"style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` 
}}>
            <div className="logo">
              <img src={logo} alt="logo" />
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
