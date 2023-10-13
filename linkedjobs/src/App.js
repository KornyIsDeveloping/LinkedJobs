import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import BrowseJobsPage from './routes/BrowseJobsPage';
import PostJobPage from './routes/PostJobPage';
import AboutPage from './routes/AboutPage';
import NewsPage from './routes/NewsPage';
import ContactPage from './routes/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/browse-jobs' element={<BrowseJobsPage/>}/>
        <Route path='/post-a-job' element={<PostJobPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
