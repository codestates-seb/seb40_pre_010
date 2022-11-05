import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserCard from './User-card';

const TagWrap = styled.div`
  text-align: left;
`;
const Body = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const Posts = ({ index, el, posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="ta-left bt bc-black-100 p12 md:pl12 pl64 d-flex">
      <div className="d-flex jc-space-between flex--item flex-grow-1">
        <div>
          <Link to={'/post/' + el.questionId} className="s-link fs-body3">
            {el.questionTitle}
          </Link>{' '}
          <Body className="ta-left my12">
            {el.questionBody !== undefined
              ? el.questionBody.replace(/<[^>]*>?/g, '')
              : null}
          </Body>
          <div className="d-flex jc-space-between">
            <TagWrap className="mb12">
              {el.questionTags !== undefined
                ? el.questionTags.split(',').map((z, j) => {
                    return (
                      <a key={j} href={'/tags/' + z} className="s-tag mr4">
                        {z}
                      </a>
                    );
                  })
                : null}
            </TagWrap>
          </div>
        </div>
        <UserCard
          pic={`https://randomuser.me/api/portraits/men/1.jpg`}
          author={el.userId}
          variation={el.createAt}
        />
      </div>
    </div>
  );
};

export default Posts;
