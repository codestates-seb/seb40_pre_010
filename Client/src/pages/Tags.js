import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import SideNav1 from '../components/Nav-Side1';
import Tag from '../components/Tag';
import dummy2 from './../static/dummy2.json';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
const TagsWrapper = styled.div`
  flex-wrap: wrap;
  div {
    flex: 0 1 24%;

    @media screen and (max-width: 768px) {
      flex: 0 1 48%;
    }
  }
`;

const Tags = () => {
  const [lists, setlists] = useState([]);
  const fetchdata = () => {
    axios.get('/api/question/questions').then((res) => setlists(res.data));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  //Related Tags 숫자 random->직접연결
  const Tagslist = [...lists].map((x) =>
    x.questionTags.includes(',') ? x.questionTags.split(',') : [x.questionTags]
  );
  const Tagslist2 = Tagslist.flat();
  const result = {};
  Tagslist2.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  const uniqueArr = [];
  Tagslist2.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });

  return (
    <Wrapper className="d-flex">
      <SideNav1 />
      <div className="pt96  px16 ">
        <div className=" ta-left d-flex jc-space-between pb8">
          <span className="fs-headline1">Tags</span>
        </div>
        <p className="ta-left fs-body2 pb24 mb24 bb bc-black-075">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
          <br />
          Using the right tags makes it easier for others to find and answer
          your question.Tag
        </p>
        <TagsWrapper className="d-flex g12 pb24">
          {dummy2.tags.map((x, i) => {
            return (
              <Tag
                key={i}
                name={x.name}
                amount={result[uniqueArr[x.name]]}
                description={x.description}
              />
            );
          })}
        </TagsWrapper>
      </div>
    </Wrapper>
  );
};
export default Tags;
