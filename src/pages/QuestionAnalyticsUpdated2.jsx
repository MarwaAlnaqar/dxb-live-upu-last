





import React, { useEffect, useState } from 'react';
import './QuestionsPage.css';

import QuestionItem from '../Components/QuestionItem';
import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added
import { fetchAllCountries } from '../services/countryService';
import CountryOptions from '../Components/CountryOptions';
import {fetchAllVotes} from '../services/voteService';
import {getElectionList} from '../services/voteService';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
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
    name: "Abstain",
      box_bg: option_c,
     percent: 90
  },]
  ,}
];






const QuestionAnalyticsUpdated2 = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadCountries = async () => {
        try {
          const result = await fetchAllCountries();
  
          // const chunks = [];
          // for (let i = 0; i < result.length; i += CHUNK_SIZE) {
          //   chunks.push(result.slice(i, i + CHUNK_SIZE));
          // }
          setSlides(result);
        } catch (error) {
          console.error('Failed to load countries:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadCountries();
    }, []);
       const [votes, setVotes] = useState([]);
        
      
        useEffect(() => {
          const loadVotes = async () => {
            try {
              // const result = await fetchAllVotes();
      const result=await getElectionList();
      console.log('result')
      console.log(result)
      
              const chunks = [];
              for (let i = 0; i < result.length; i += CHUNK_SIZE) {
                chunks.push(result.slice(i, i + CHUNK_SIZE));
              }
              setVotes(chunks);
            } catch (error) {
              console.error('Failed to load countries:', error);
            } finally {
              setLoading(false);
            }
          };
      
          loadVotes();
        }, []);
  return (
    <div className="questions-container country-container" style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` ,maxWidth:'none',padding: '0.5rem'
}}>
      <div className="logo" >
          <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
      </div>

      <div className="question-box">
        {questions_data.map((item, index) => (
          <div key={index} className="question-block" style={{paddingTop:0}}>
 <Swiper
   
            modules={[Pagination]}
  spaceBetween={50}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 120000 , disableOnInteraction: false }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
        >
                <SwiperSlide key={index}>
   <CountryOptions options={slides} isSliced={false} numberOfCol={8}  />
                </SwiperSlide>
                  <SwiperSlide key={index}>
                          {/* <div className="flex-center" style={{paddingTop:15}} >
          <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`}  alt="logo" />
      </div> */}
                    <div style={{
                        display:'flex',
    justifyContent: 'center',padding:12,height: '60vh'
                    }}>
                        
  <QuestionOptionChart options={item.option} customeOption={true} />
                    </div>
                    
                </SwiperSlide>

        </Swiper>
         
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnalyticsUpdated2;
