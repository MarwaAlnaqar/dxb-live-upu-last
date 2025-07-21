import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/Question-analytics" element={<QuestionAnalytics />} />
        <Route path="/Question-private" element={<QuestionsPrivate />} />
        <Route path="/Question-private-analytics" element={<QuestionPrivateAnalytics />} />


        
      </Routes>
    </Router>
  );
}


export default App
