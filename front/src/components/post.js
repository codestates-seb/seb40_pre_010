import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TagWrap = styled.div`
  text-align: left;
`;
const Posts = ({ index, el, posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(el);
  return (
    <div className="ta-left bt bc-black-100 p12 md:pl12 pl64">
      <Link to={'/post/' + el.question_id} className="s-link fs-body3">
        {el.question_title}
      </Link>
      <p className="ta-left py12">{el.question_body}</p>
      <div className="d-flex jc-space-between">
        <TagWrap className="mb12">
          {el.question_tags.split(',').map((z, j) => {
            return (
              <a key={j} href={'/tags/' + z} className="s-tag mr4">
                {z}
              </a>
            );
          })}
        </TagWrap>
        <div>{el.question_author}</div>
      </div>
    </div>
  );
};

export default Posts;
