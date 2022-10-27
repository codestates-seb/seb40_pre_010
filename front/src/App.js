import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavSide1 from './components/Nav-Side1';
import NavSide2 from './components/Nav-Side2';
import TopMainNav from './components/TopMainNav';
import QuestionList from './pages/QuestionList';

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
        <MainWrapper className="d-flex">
          <NavSide1 />
          <Routes className="main">
            <Route path="/" element={<QuestionList />} />
          </Routes>
          <NavSide2 className="side2" />
        </MainWrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
