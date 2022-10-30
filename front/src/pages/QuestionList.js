import dummy1 from '../static/dummy1.json';
import NavSide1 from './../components/Nav-Side1';
import NavSide2 from './../components/Nav-Side2';
import Posts from '../components/post';
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import Pagination from './../components/pagination';
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 1em;
  > div:first-child {
    border-width: 0 !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  > div:last-child {
    padding-top: 65px;
  }
`;
const PostWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  @media screen and (min-width: 376px) and (max-width: 768px) {
    padding-right: 0;
  }
`;

const QuestionList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.split('/')[2];
    const arr = [];
    const fetchPosts = async () => {
      setLoading(true);
      //const res = await = axios.get(url);
      if (pathname) {
        const res = dummy1.Question.filter((x) =>
          x.question_tags.includes(pathname)
        );
        setPosts(res);
      } else {
        const res = dummy1;
        setPosts(res.Question);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);
  return (
    <Wrapper>
      <NavSide1 />
      <div className="pt96 w100">
        <div className=" ta-left px16 d-flex jc-space-between pb8">
          <span className="fs-headline1">All Questions</span>
          <Link to="/" className="s-btn s-btn__primary">
            Ask Question
          </Link>
        </div>
        <div className="d-flex fd-column">
          <PostWrapper>
            {currentPosts.map((x, i) => {
              return <Posts key={i} el={x} loading={loading} />;
            })}
          </PostWrapper>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <NavSide2 className="side2" />
    </Wrapper>
  );
};
export default QuestionList;
