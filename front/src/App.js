import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavSide1 from './components/Nav-Side1';

import TopMainNav from './components/TopMainNav';
import QuestionList from './pages/QuestionList';
import QuestionPost from './pages/QuestionPost';

import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  > div {
    &:not(:first-child) {
      padding-top: 80px;
    }
  }
`;
function App() {
  return (
    <>
      <BrowserRouter>
        <TopMainNav />
        <MainWrapper className="d-flex sm:fd-column">
          <Routes className="main">
            <Route path="/" element={<QuestionList />} />
            <Route path="/post/:id" element={<QuestionPost />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
