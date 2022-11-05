import NavSide1 from './../components/Nav-Side1';
import NavSide2 from './../components/Nav-Side2';
import AlertError from '../components/Alert';
import styled from 'styled-components';
import axios from 'axios';
import { React, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect } from 'react';
import UserCard from '../components/User-card';
import { useNavigate } from 'react-router-dom';
import { offset } from '@popperjs/core';
import Triangle from '../components/Triangle';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  .fs-headline1 {
    text-align: left;
    margin-bottom: 8px;
  }
`;
const MainBox = styled.div``;
const PostArea = styled.div`
  p {
    text-align: left;
    margin-bottom: 8px;
    margin-right: 16px;
    font-size: 16px;
  }
  & .BTN {
    margin-right: 10px;
  }
`;
const EditoreWrapper = styled.div`
  .toastui-editor-defaultUI-toolbar {
    flex-wrap: wrap;
  }
  .toastui-editor-dropdown-toolbar {
    height: auto;
    flex-wrap: wrap;
  }
  .toastui-editor-contents ol p,
  .toastui-editor-contents ul p {
    word-break: break-all;
  }
`;
const pic = `https://randomuser.me/api/portraits/men/${Math.floor(
  Math.random() * 100
)}.jpg`;
const QuestionPost = () => {
  const [IsLogin, setIsLogin] = useState(false);
  const [IsAlert, setIsAlert] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState('');
  const [Answers, setAnswers] = useState([]);
  const [Answer, setAnswer] = useState('');
  const [userId, setUserId] = useState('');

  const postnum = useParams();
  const editorRef = useRef();
  const navigate = useNavigate();

  const Asked =
    posts.createdAt !== undefined ? posts.createdAt.split('T')[0] : null; //Post.created_at;
  const Modified =
    posts.createdAt !== undefined ? posts.createdAt.split('T')[0] : null;

  const getfetch = async () => {
    axios.get(`/api/question/${postnum.id}`).then((res) => {
      setPosts(res.data);
      setUserId(res.data.userId);
    });
  };
  useEffect(() => {
    getfetch();
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  useEffect(() => {
    setTags(posts.questionTags);
    setAnswers(posts.answers);
  }, [posts]);

  const onchangehandle = () => {
    setAnswer(editorRef.current?.getInstance().getMarkdown());
  };
  const handleClick = () => {
    if (!IsLogin || localStorage.getItem('token') === null) {
      setIsAlert(true);
    } else {
      if (Answer.length >= 10) {
        axios
          .post('/api/answer', {
            userId: localStorage.getItem('userId'),
            answerBody: Answer,
            postNum: postnum.id,
          })
          .then(window.location.reload());
      } else {
        alert('10자 이상 작성해주세요');
      }
    }
    setAnswers(posts.answers);
  };

  const onClickDelete = () => {
    axios
      .delete(`/api/question/${postnum.id}`)
      .catch((res) => console.log(res))
      .then(navigate('/'));
  };

  return (
    <Wrapper className="d-flex sm:fd-column">
      {IsAlert ? (
        <AlertError
          title="authorization error"
          body="Login For Comment"
          link="/login"
        />
      ) : null}
      <NavSide1 />
      <div className="pt96 pb24 px16">
        <div className="s-page-title mb16 pl16">
          <h1 className="s-page-title--header">{posts.questionTitle}</h1>
          <div className="d-flex mt24">
            <p className="fc-black-500 mr24">
              Asked <span className="fc-black-800">{Asked}</span>
            </p>
            <p className="fc-black-500 mr24">
              Modified <span className="fc-black-800">{Modified}</span>
            </p>
          </div>
        </div>

        <MainBox className="d-flex jc-space-between md:fd-column">
          <PostArea className="pr16">
            <div className="bb bc-black-075 d-flex pb8">
              <Triangle />
              <div className="flex--item fl-grow1 d-flex jc-space-between">
                <div className="flex--item flex-grow-1">
                  {posts.questionBody !== undefined ? (
                    <Viewer initialValue={posts.questionBody} />
                  ) : null}

                  <div className="d-flex jc-space-between mb8 fd-column">
                    <p>
                      {tags !== undefined
                        ? tags.split(',').map((z, j) => {
                            return (
                              <a
                                key={j}
                                href={'/tags/' + z}
                                className="s-tag mr4"
                              >
                                {z}
                              </a>
                            );
                          })
                        : null}
                    </p>
                    <div className="d-flex jc-space-between ">
                      <div className="d-flex">
                        <button className="s-link s-link__muted BTN">
                          Share
                        </button>
                        {localStorage.getItem('userId') === userId ? (
                          <div>
                            <button className="s-link s-link__muted BTN">
                              Edit
                            </button>
                            <button
                              onClick={onClickDelete}
                              className="s-link s-link__muted BTN"
                            >
                              delete
                            </button>
                          </div>
                        ) : null}
                        <button className="s-link s-link__muted BTN">
                          Following
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <UserCard
                  pic={pic}
                  author={posts.userId}
                  variation={posts.createdAt}
                />
              </div>
            </div>
            <div className="mt24">
              {Answers !== undefined ? (
                <div className="fs-headline1">{Answers.length} Answer</div>
              ) : null}
              {Answers !== undefined
                ? Answers.map((x, i) => {
                    return (
                      <div
                        key={i}
                        className="pl24 py12 bb bc-black-075 d-flex jc-space-between"
                      >
                        <div className="d-flex">
                          <Triangle />
                          <div className="d-flex fd-column jc-space-between">
                            {Answers !== undefined ? (
                              <Viewer initialValue={x.answerBody} />
                            ) : null}
                            <div className="fc-black-500 pb16">
                              {x.createdAt}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex jc-end">
                          <UserCard
                            pic={`https://randomuser.me/api/portraits/men/1.jpg`}
                            author={x.userId}
                            variation={x.createdAt}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            <EditoreWrapper>
              <div className="my24 fs-headline1">Your Answer</div>
              <Editor
                initialValue=" "
                placeholder="10자이상 작성해주세요"
                previewStyle="tab"
                height="300px"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
                onChange={onchangehandle}
              ></Editor>
              <div>10자 이상 작성해주세요.</div>
              <div className="d-flex jc-end my12">
                <button className="s-btn s-btn__primary" onClick={handleClick}>
                  Post Your Answer
                </button>
              </div>
            </EditoreWrapper>
          </PostArea>
          <NavSide2 />
        </MainBox>
      </div>
    </Wrapper>
  );
};
export default QuestionPost;
