import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Questions from './pages/questions';
// import QuestionAnalytics from'./pages/QuestionAnalytics';
import QuestionsPrivate from'./pages/privatePages/QuestionsPrivate';
// import QuestionPrivateAnalytics from'./pages/privatePages/QuestionPrivateAnalytics';
import QuestionPrivateAnalyticsV2 from'./pages/privatePages/QuestionPrivateAnalyticsV2';
// import QuestionAnalyticsUpdated from'./pages/QuestionAnalyticsUpdated';
import QuestionAnalyticsUpdated2 from'./pages/QuestionAnalyticsUpdated2';


// import CountryAnalytics from './pages/CountryAnalytics';
import CountryAnalyticsV2 from './pages/CountryAnalyticsv2';
import QuestionAnalyticsUpdated3 from './pages/QuestionAnalyticsUpdated3';


function App() {
  return (
    <Router >
      <Routes>
        {/* <Route path="/" element={<Questions />}  /> */}
        <Route path="/country-analytics" element={<CountryAnalyticsV2 />} />
        <Route path="/question-analytics" element={<QuestionAnalyticsUpdated2 />} />
        <Route path="/question-analytics-2" element={<QuestionAnalyticsUpdated3 />} />

        <Route path="/question-private" element={<QuestionsPrivate />} />
        {/* <Route path="/country-analytics" element={<CountryAnalytics />} />
        <Route path="/country-analytics-v2" element={<CountryAnalyticsV2 />} />

        <Route path="/question-analytics" element={<QuestionAnalytics />} />
        <Route path="/question-analytics-v2" element={<QuestionAnalyticsUpdated />} />
        <Route path="/question-analytics-v3" element={<QuestionAnalyticsUpdated2 />} />


        <Route path="/question-private" element={<QuestionsPrivate />} />
        <Route path="/question-private-analytics" element={<QuestionPrivateAnalytics />} />
        <Route path="/question-private-analytics-V2" element={<QuestionPrivateAnalyticsV2 />} /> */}


        
      </Routes>
    </Router>
  );
}


export default App
