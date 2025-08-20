





import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './QuestionsPage.css';

import QuestionItem from '../Components/QuestionItem';
import QuestionOptionChart from '../Components/QuestionOptionChart'; // ✅ Import added
import { fetchAllCountries } from '../services/countryService';
import CountryOptions from '../Components/CountryOptions';
import {fetchAllVotes} from '../services/voteService';
import {getElectionList,getTheElectionDetail,getElectionResultsList} from '../services/voteService';
import { Swiper, SwiperSlide } from 'swiper/react';
import OptionBox from '../Components/OptionBox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import countries from '../data/countries';
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



const CHUNK_SIZE = 10; // example chunk size
const POLL_INTERVAL = 5000; // 5 seconds, adjust as needed




const QuestionAnalyticsUpdated3 = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [electionDetails, setElectionDetails] = useState();
  const [electionList, setElectionList] = useState([]);
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState([]);

  const intervalRef = useRef(null);

  // Load countries once
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const result = countries.map(country => country.Label);
        //  let countryNames = data.map(country => country.name.common);
        setSlides(result);
      } catch (error) {
        console.error('Failed to load countries:', error);
      }
    };
    loadCountries();
  }, []);

  // Polling for election updates
  useEffect(() => {
    const loadVotesAndResults = async () => {
      try {
        const result = await getElectionList();
        setElectionList(result.votes);

        const completedElection = result.votes.find((x) => x.status === 'completed');
        if (!completedElection) return;

        const electionId = completedElection.id;

        // Fetch the latest results for this election
        const resultVoting = await getElectionResultsList(electionId);

        const abstainData = {
          name: 'Abstain',
          data: resultVoting.questions[0].abstentions.by_choice,
        };

        const optionsData = [...resultVoting.questions[0].choices, abstainData];
        setOptions(optionsData);

        const electionDetail = await getTheElectionDetail(electionId);
        setElectionDetails(electionDetail.vote);

        // Chunk votes for pagination
        const chunks = [];
        for (let i = 0; i < result.votes.length; i += CHUNK_SIZE) {
          chunks.push(result.votes.slice(i, i + CHUNK_SIZE));
        }
        setVotes(chunks);

      } catch (error) {
        console.error('Failed to load votes or election results:', error);
      } finally {
        setLoading(false);
      }
    };

    // Load immediately
    loadVotesAndResults();

    // Set interval to keep fetching updates
    intervalRef.current = setInterval(loadVotesAndResults, POLL_INTERVAL);

    // Cleanup interval on unmount
    return () => clearInterval(intervalRef.current);

  }, []);

  return (
    <div className="questions-container country-container" style={{ 
 backgroundImage: `url(${import.meta.env.BASE_URL}assets/upu/bg-upu.svg)` 
}}>
      <div className="logo" >
          <img src={`${import.meta.env.BASE_URL}/assets/upu/logos.svg`} alt="logo" />
      </div>

      <div className="question-box">
        {questions_data.map((item, index) => (
          <div key={index} className="question-block" >
 
   <CountryOptions options={slides} isSliced={false} numberOfCol={8}  />
    <div
           className="counry-logo"
           style={loading ? { position: 'absolute', bottom: 0 } : {}}
         >
        
           <div className='option-check-box'
           
           >
               {options.map((option, index) => (
             
             <OptionBox label={option.name} isWhite={true} count={option.data} />
            
))}
           </div>
         
         </div>
            
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnalyticsUpdated3;
