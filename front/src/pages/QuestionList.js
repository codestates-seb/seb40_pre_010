import dummy1 from '../static/dummy1.json';
import NavSide1 from './../components/Nav-Side1';
import NavSide2 from './../components/Nav-Side2';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 1em;
  > div:first-child {
    border-width: 0 !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  > div:last-child {
    padding-top: 65px;
  }
`;
const PostWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  @media screen and (min-width: 376px) and (max-width: 768px) {
    padding-right: 0;
  }
`;
const TagWrap = styled.div`
  text-align: left;
`;
const QuestionList = () => {
  return (
    <Wrapper>
      <NavSide1 />
      <div className="pt96">
        <div className=" ta-left px16 d-flex jc-space-between pb8">
          <span className="fs-headline1">All Questions</span>
          <Link to="/" className="s-btn s-btn__primary">
            Ask Question
          </Link>
        </div>
        <div className="d-flex">
          <PostWrapper>
            {dummy1.Question.map((x, i) => {
              return (
                <div
                  className="ta-left bt bc-black-100 p12 md:pl12 pl64"
                  key={i}
                >
                  <Link to={'/post/' + i} className="s-link fs-body3">
                    {x.question_title}
                  </Link>
                  <p className="ta-left py12">{x.question_body}</p>
                  <div className="d-flex jc-space-between">
                    <TagWrap className="mb12">
                      {x.question_tags.split(',').map((z, j) => {
                        return (
                          <a
                            key={j}
                            href={'/question/' + z}
                            className="s-tag mr4"
                          >
                            {z}
                          </a>
                        );
                      })}
                    </TagWrap>
                    <div>{x.question_author}</div>
                  </div>
                </div>
              );
            })}
          </PostWrapper>
        </div>
      </div>
      <NavSide2 className="side2" />
    </Wrapper>
  );
};
export default QuestionList;
