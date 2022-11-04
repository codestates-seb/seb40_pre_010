import React from 'react';
import { Link } from 'react-router-dom';

const Tag = (props) => {
  return (
    <>
      <div className="p12 ba bc-black-075 bar-sm">
        <div className="ta-left">
          <Link to={'/tags/' + props.name} className="s-tag" href="#">
            {props.name}
          </Link>
          {props.amount ? (
            <span className="fc-black-500"> x {props.amount}</span>
          ) : null}
        </div>
        <div className="ta-left">{props.description}</div>
      </div>
    </>
  );
};
export default Tag;
