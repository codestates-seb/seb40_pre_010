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
        </div>
        <div className="ta-left">{props.description}</div>
      </div>
    </>
  );
};
export default Tag;
