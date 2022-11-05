import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  > div.s-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
`;

const AlertError = (props) => {
  return (
    <Wrapper>
      <div className="s-card p0 bs-lg">
        <div className="s-card ps-relative b4 l4 pt24 ta-center">
          <h2 className="fs-body3 lh-sm fc-dark">{props.title}</h2>
          <Link to={props.link} className="s-btn s-btn__sm s-btn__danger">
            {props.body}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default AlertError;
