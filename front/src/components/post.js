import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserCard from './user-card';

const TagWrap = styled.div`
  text-align: left;
`;
const Body = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 3; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
const Posts = ({ index, el, posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="ta-left bt bc-black-100 p12 md:pl12 pl64 d-flex jc-space-between">
      <div className="d-flex fd-column">
        <Link to={'/post/' + el.questionId} className="s-link fs-body3">
          {el.questionTitle}
        </Link>
        <Body className="ta-left my12">
          {el.questionBody.replace(/<[^>]*>?/g, '')}
        </Body>
        <div className="d-flex jc-space-between">
          <TagWrap className="mb12">
            {el.questionTags.split(',').map((z, j) => {
              return (
                <a key={j} href={'/tags/' + z} className="s-tag mr4">
                  {z}
                </a>
              );
            })}
          </TagWrap>
        </div>
      </div>
      <UserCard
        pic={`https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 100
        )}.jpg`}
        author={el.userId}
      />
    </div>
  );
};

export default Posts;
