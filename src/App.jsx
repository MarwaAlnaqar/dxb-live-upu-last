import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questions from './pages/questions';
import QuestionAnalytics from'./pages/QuestionAnalytics';
import QuestionsPrivate from'./pages/privatePages/QuestionsPrivate';
import QuestionPrivateAnalytics from'./pages/privatePages/QuestionPrivateAnalytics';




function App() {
  return (
    <Router basename="/dxb-live-upu-last">
      <Routes>
        <Route path="/" element={<Questions />}  />
        {/* <Route path="/questions" element={<Questions />} /> */}
        <Route path="/question-analytics" element={<QuestionAnalytics />} />
        <Route path="/question-private" element={<QuestionsPrivate />} />
        <Route path="/question-private-analytics" element={<QuestionPrivateAnalytics />} />


        
      </Routes>
    </Router>
  );
}


export default App
