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
import Questions from './pages/questions';
import QuestionAnalytics from'./pages/QuestionAnalytics';
import QuestionsPrivate from'./pages/privatePages/QuestionsPrivate';
import QuestionPrivateAnalytics from'./pages/privatePages/QuestionPrivateAnalytics';
import QuestionPrivateAnalyticsV2 from'./pages/privatePages/QuestionPrivateAnalyticsV2';


import CountryAnalytics from './pages/CountryAnalytics';



function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Questions />}  />
        <Route path="/country-analytics" element={<CountryAnalytics />} />
        <Route path="/question-analytics" element={<QuestionAnalytics />} />
        <Route path="/question-private" element={<QuestionsPrivate />} />
        <Route path="/question-private-analytics" element={<QuestionPrivateAnalytics />} />
        <Route path="/question-private-analytics-V2" element={<QuestionPrivateAnalyticsV2 />} />


        
      </Routes>
    </Router>
  );
}


export default App
