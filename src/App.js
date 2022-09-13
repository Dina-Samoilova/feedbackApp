import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';
import { AboutLinkIcon } from './components/AboutLinkIcon';
import { AboutPage } from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

export const App = () => {
  return (
    <FeedbackProvider>
      <HashRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutLinkIcon />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </HashRouter>
    </FeedbackProvider>
  );
};
