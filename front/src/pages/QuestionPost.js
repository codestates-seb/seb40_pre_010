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
`;
const pic = `https://randomuser.me/api/portraits/men/${Math.floor(
  Math.random() * 100
)}.jpg`;
const QuestionPost = () => {
  const [IsLogin, setIsLogin] = useState(true);
  const [IsAlert, setIsAlert] = useState(false);
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState('');
  const [Answers, setAnswers] = useState([]);
  const [Answer, setAnswer] = useState('');

  const postnum = useParams();
  const editorRef = useRef();

  const PostAuthor = ''; //Post.question_author;
  const PostBody = ''; //Post.question'answerbody1_body;
  const Asked =
    posts.createdAt !== undefined ? posts.createdAt.split('T')[0] : null; //Post.created_at;
  const Modified =
    posts.createdAt !== undefined ? posts.createdAt.split('T')[0] : null;

  const getfetch = async () => {
    axios
      .get(`/question/${postnum.id}`, {
        headers: { 'ngrok-skip-browser-warning': 'skip' },
      })
      .then((res) => setPosts(res.data));
  };
  useEffect(() => {
    getfetch();
  }, []);

  useEffect(() => {
    setTags(posts.questionTags);
    setAnswers(posts.answers);
  }, [posts]);

  const onchangehandle = () => {
    setAnswer(editorRef.current?.getInstance().getMarkdown());
  };
  const handleClick = () => {
    if (!IsLogin) {
      setIsAlert(true);
    } else {
      //로그인시 진행
      console.log(postnum.id);
      axios
        .post('/answer', {
          userId: 'loginId',
          answerBody: Answer,
          postNum: postnum.id,
        })
        .then((res) => console.log(res))
        .then(getfetch());
    }
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
        <div className="s-page-title">
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
            <div className="bb bc-black-075">
              {posts.questionBody !== undefined ? (
                <Viewer initialValue={posts.questionBody} />
              ) : null}

              <div className="d-flex jc-space-between mb8">
                <p>
                  {tags !== undefined
                    ? tags.split(',').map((z, j) => {
                        return (
                          <a key={j} href={'/tags/' + z} className="s-tag mr4">
                            {z}
                          </a>
                        );
                      })
                    : null}
                </p>
                <UserCard
                  pic={pic}
                  author={posts.userId}
                  variation={posts.questionId}
                />
              </div>
            </div>
            <div className="mt24">
              {Answers !== undefined ? (
                <div className="fs-headline1">{Answers.length} Answer</div>
              ) : null}
              {Answers !== undefined
                ? Answers.map((x, i) => {
                    console.log(x);
                    return (
                      <div key={i} className="py12 pr24 bb bc-black-075">
                        {Answers !== undefined ? (
                          <Viewer
                            initialValue={x.answerBody}
                            className="ta-left"
                          />
                        ) : null}
                        <div className="ta-right">
                          <span>{x.userId}</span>
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
                previewStyle="tab"
                height="300px"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
                onChange={onchangehandle}
              ></Editor>
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
