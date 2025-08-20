
import React, { useEffect, useState } from 'react';
import './QuestionsPage.css';

import CountryOptionsCheck from '../Components/CountryOptionsCheck';
import OptionBox from '../Components/OptionBox';
import { fetchAllCountries } from '../services/countryService';
import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import countries from '../data/countries';
const CHUNK_SIZE = 100;
const option_a = `${import.meta.env.BASE_URL}/assets/upu/option_a.svg`;
const option_b = `${import.meta.env.BASE_URL}/assets/upu/option_b.svg`;

const option_c = `${import.meta.env.BASE_URL}/assets/upu/option_c.svg`;
const CountryAnalyticsV2 = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const option= [
  {
    name: "Present",
     box_bg: option_a,// relative path
     percent: 60
  },
  {
    name: "unPresent",
     box_bg: option_b,
     percent: 30
  },
]
  useEffect(() => {
    const loadCountries = async () => {
      try {
        // const result = await fetchAllCountries();
  const result = countries.map(country => country.Label);
        const chunks = [];
        for (let i = 0; i < result.length; i += CHUNK_SIZE) {
          chunks.push(result.slice(i, i + CHUNK_SIZE));
        }
        setSlides(chunks);
      } catch (error) {
        console.error('Failed to load countries:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  return (
    <div
      className="questions-container country-container"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)`
        
      }}
    >
       <div className="logo" >
          <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
   
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 120000 , disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
          {slides.map((countriesChunk, index) => (
            <SwiperSlide key={index}>
              <CountryOptionsCheck options={countriesChunk} offset={index * CHUNK_SIZE} isSlider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

        <div
        className="counry-logo"
        style={loading ? { position: 'absolute', bottom: 0 } : {}}
      >
     
        <div className='option-check-box'
        
        >
          <OptionBox label="Present / Présent" isWhite={true} count={60} />
          {/* <OptionBox label="Not Present"isWhite={true} count={60} /> */}
        </div>
      
      </div>
    </div>
  );
};

export default CountryAnalyticsV2;

