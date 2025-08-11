// import React from 'react';
// import './QuestionsPage.css';

// import CountryOptions from '../Components/CountryOptions';
// import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added
// import  { useEffect, useState } from 'react';
// import { fetchAllCountries } from '../services/countryService';

// const CountryAnalytics = () => {


//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const loadCountries = async () => {
//       try {
//         const result = await fetchAllCountries();
//          const resultToDisplay = result.slice(0, 70);
//         setCountries(resultToDisplay);
//       } catch (error) {
//         console.error('Failed to load countries:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//   useEffect(() => {
//     loadCountries();
//   }, []);





//   return (
//     <div className="questions-container" style={{ 
//               backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/banner3.svg)`,
//           }}>
     

//         {loading ? <p>Loading...</p> : 
 
//       <div className="question-box">
//          <CountryOptions options={countries} />
//       </div>}
//         {!loading ?
//          <div className="counry-logo">
//           <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" />
//       </div> :  <div className="counry-logo" style={{position:'absolute',bottom:0}}>
//           <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" />
//       </div> 
//       }
//     </div>
  
//   );
// };

// export default CountryAnalytics;
import React, { useEffect, useState } from 'react';
import './QuestionsPage.css';

import CountryOptions from '../Components/CountryOptions';
import { fetchAllCountries } from '../services/countryService';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const CHUNK_SIZE = 72;

const CountryAnalytics = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

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
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/banner4.svg)`,
        
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
              <CountryOptions options={countriesChunk} offset={index * CHUNK_SIZE} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div
        className="counry-logo"
        style={loading ? { position: 'absolute', bottom: 0 } : {}}
      >
        <img src={`${import.meta.env.BASE_URL}/assets/upu/colored-logo.svg`} alt="logo" />
      </div>
    </div>
  );
};

export default CountryAnalytics;

