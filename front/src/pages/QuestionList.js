import dummy1 from '../static/dummy1.json';
import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
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

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: blue;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  font-size: 1rem;
`;

const QuestionList = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/askquestion');
  };

  return (
    <Wrapper>
      <StyledButton onClick={onClick}>Ask Question</StyledButton>
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
