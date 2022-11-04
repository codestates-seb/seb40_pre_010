import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 320px;
  height: 755px;
  border-radius: 3px;
  & .accordion {
    margin-left: 10px;
    margin-bottom: 30px;
  }
  & .header {
    background-color: #f8f9f9;
    color: #6a737c;
    height: 43px;
    padding: 12px;
    font-size: 18px;
  }
  & .body {
    padding: 15px 10px 15px 20px;
  }
  & .sub {
    font-size: 15px;
  }
`;

function BasicExample() {
  return (
    <StyledDiv>
      <div className="accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <div className="header">Step 1: Draft your question</div>
            <div className="body">
              <p>
                The community is here to help you with specific coding,
                algorithm, or language problems.
              </p>

              <p>Avoid asking opinion-based questions.</p>
            </div>
            <Accordion.Header>Summarize the problem</Accordion.Header>
            <Accordion.Body>
              * Include details about your goal
              <br />
              * Describe expected and actual results
              <br />* Include any error messages
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Describe what you’ve tried</Accordion.Header>
            <Accordion.Body>
              Show what you’ve tried and tell us what you found (on this site or
              elsewhere) and why it didn’t meet your needs. You can get better
              answers when you provide research.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Show some code</Accordion.Header>
            <Accordion.Body>
              When appropriate, share the minimum amount of code others need to
              reproduce your problem (also called a minimum, reproducible
              example)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Have a non-programming question?
            </Accordion.Header>
            <Accordion.Body>
              Super user <p>Troubleshooting hardware and software issues</p>
              Software engineering{' '}
              <p>For software development methods and process questions </p>
              Hardware recommendations{' '}
              <p>
                Software recommendations Ask questions about the site on meta
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>More helpful links</Accordion.Header>
            <Accordion.Body>
              <p>Find more information about how to ask a good question here</p>
              Visit the help center
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </StyledDiv>
  );
}

export default BasicExample;
