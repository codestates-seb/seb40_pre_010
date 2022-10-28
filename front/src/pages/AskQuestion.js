import React from 'react';
import styled from 'styled-components';
import TextEditor from '../components/TextEditor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 325px;
  height: 112px;
  padding: 40 10 40 30;
  font-size: 32px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  justify-content: left;
  width: 80rem;
  height: 2.5rem;
`;

const StyledDiv = styled.div`
  border: 1px solid;
  padding: 20px;
`;

const StyledButton = styled.button`
  border: 1px solid;
  color: #ffffff;
  background-color: #379fef;
  width: 148px;
  height: 37px;
  border-radius: 3px;
  box-shadow: none;
  font-size: 13.6px;
  padding: 2px 9px;
`;

const AskQuestion = () => {
  return (
    <Wrapper>
      <Header>Ask a public question</Header>
      <StyledDiv>
        Title
        <br />
        Be specific and imagine you`re asking a question to another person
        <Input placeholder="e.g Is there an R function for finding the index of an element in a vector?"></Input>
        <Question>
          Body
          <br />
          Include all the information someone would need to answer your question
          <TextEditor />
        </Question>
        Tags
        <br />
        Add up to 5 tags to describe what your question is about
        <Input placeholder="e.g. (angular sql-server string)"></Input>
      </StyledDiv>
      <StyledButton>Review your question</StyledButton>
    </Wrapper>
  );
};

export default AskQuestion;
