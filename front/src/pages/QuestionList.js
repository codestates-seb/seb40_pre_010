import axios from 'axios';
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
  useParams,
} from 'react-router-dom';
import Pagination from './../components/pagination';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
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
  const params = useParams();
  const [search_id, setSearch_id] = useState('title');
  const [lists, setLists] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState('test');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const location = useLocation();

  let path = location.pathname.split('/')[1];
  let pathname = location.pathname.split('/')[2];
  const fetchPosts = async () => {
    setLoading(true);
    //const res = await = axios.get(url);
    let res = '';
    if (pathname) {
      switch (path) {
        case 'title':
          res = lists.filter((x) => x.questionTitle.includes(pathname));
          setPosts(res);

          break;
        case 'body':
          res = lists.filter((x) => x.questionBody.includes(pathname));
          setPosts(res);
          break;
        case 'author':
          res = lists.filter((x) => x.userId.includes(pathname));
          setPosts(res);
          break;
        case 'tags':
          res = lists.filter((x) => x.questionTags.includes(pathname));
          setPosts(res);
          break;
        default:
          setPosts(lists);
          break;
      }
    } else {
      setPosts(lists);
    }

    setLoading(false);
  };
  const onChangeSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const getfetch = async () => {
    axios
      .get('/question/questions', {
        headers: { 'ngrok-skip-browser-warning': 'skip' },
      })
      .then((res) => setLists(res.data));
  };

  useEffect(() => {
    getfetch();
    fetchPosts();
  }, []);
  useEffect(() => {
    setPosts(lists);
    fetchPosts();
  }, [lists]);

  useEffect(() => {
    //getfetch();
    fetchPosts();
    console.log(posts);
  }, [location]);

  return (
    <Wrapper>
      <NavSide1 />
      <div className="pt96 w100">
        <div className=" ta-left px16 ">
          <div className="d-flex jc-space-between pb8 s-page-title fd-row">
            <h1 className="s-page-title--header">All Questions</h1>
            <Link
              // onClick={clickAsk}
              to="/askquestion"
              className="s-btn s-btn__primary"
            >
              Ask Question
            </Link>
          </div>
          <div className="d-flex jc-space-between ai-center py8 mt-4 ">
            <div className="fs-body3">{posts.length} questions</div>
            <div className="d-flex g4">
              <div className="flex--item s-select w100">
                <select
                  id="select-menu"
                  onChange={(e) => setSearch_id(e.target.value)}
                >
                  <option defaultValue={'title'}>title</option>
                  <option value="body">body</option>
                  <option value="author">author</option>
                </select>
              </div>
              <input
                type="text"
                className="s-input__sm s-input"
                onChange={onChangeSearchHandler}
              ></input>
              <Link
                to={'/' + search_id + '/' + search}
                className="s-btn s-btn__primary"
                type="button"
              >
                search
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex fd-column">
          <PostWrapper>
            {currentPosts.reverse().map((x, i) => {
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
