
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

const CHUNK_SIZE = 72;
const option_a = `${import.meta.env.BASE_URL}/assets/upu/option_a.svg`;
const option_b = `${import.meta.env.BASE_URL}/assets/upu/option_b.svg`;

const option_c = `${import.meta.env.BASE_URL}/assets/upu/option_c.svg`;
const CountryAnalytics = () => {
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
        const result = await fetchAllCountries();

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
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/banner4.svg)`
        
      }}
    >
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
        <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" />
    <div
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-around",
        margin: "20px auto",
        gap: "20px", // spacing between boxes
      }}
    >
      <OptionBox label="Present" count={60} />
      <OptionBox label="Not Present" count={60} />
    </div>
        {/* <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" />

        <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" /> */}

             {/* <QuestionOptionChart options={option} customeOption={true} /> */}
      </div>
    </div>
  );
};

export default CountryAnalytics;

