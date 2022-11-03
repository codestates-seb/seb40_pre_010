import React from 'react';
import './App.css';
import Footer from './components/footer';
import Tags from './pages/Tags';
import TopMainNav from './components/TopMainNav';
import QuestionList from './pages/QuestionList';
import QuestionPost from './pages/QuestionPost';
import Login from './components/Login';
import SignUp from './components/SignUp';

import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AskQuestion from './pages/AskQuestion';

const MainWrapper = styled.div`
  //max-width: 1240px;
  width: 100%;
  margin: auto;
`;
function App() {
  return (
    <>
      <BrowserRouter>
        <TopMainNav />
        <MainWrapper className="d-flex sm:fd-column">
          <Routes className="main">
            <Route path="/" element={<QuestionList />} />
            <Route path="/:search1/:search2" element={<QuestionList />} />
            <Route path="/post/:id" element={<QuestionPost />} />
            <Route path="/tags/:tag" element={<QuestionList />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/askquestion" element={<AskQuestion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
