import dummy1 from '../static/dummy1.json';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  width: 100%;
  margin-right: 1em;
  > div:first-child {
    border-width: 0 !important;
  }
`;
const TagWrap = styled.div`
  text-align: left;
`;
const QuestionList = () => {
  return (
    <Wrapper>
      {dummy1.Question.map((x, i) => {
        return (
          <div className="ta-left bt bc-black-100 p12 md:pl12 pl64" key={i}>
            <Link className="s-link fs-body3">{x.question_title}</Link>
            <p className="ta-left py12">{x.question_body}</p>
            <div className="d-flex jc-space-between">
              <TagWrap className="mb12">
                {x.question_tags.split(',').map((z, j) => {
                  return (
                    <a key={j} href="/" className="s-tag mr4">
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
    </Wrapper>
  );
};
export default QuestionList;
