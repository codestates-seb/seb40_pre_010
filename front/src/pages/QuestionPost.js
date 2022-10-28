import dummy1 from '../static/dummy1.json';
import NavSide1 from './../components/Nav-Side1';
import NavSide2 from './../components/Nav-Side2';
import styled from 'styled-components';
import { React, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const Wrapper = styled.div`
  width: 100%;
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
const EditoreWrapper = styled.div``;
const QuestionPost = () => {
  const postnum = useParams();
  const Post = dummy1.Question[postnum.id];
  const Answer = [];
  dummy1.Answer.forEach((x) => {
    if (x.post_num === postnum.id) {
      Answer.push(x);
    }
  });
  const PostBody = Post.question_body;
  const Asked = Post.created_at;
  const Modified = Post.created_at;
  const Viewed = '';

  const handleClick = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <Wrapper className="d-flex">
      <NavSide1 />
      <div className="pt96 pb24 px16">
        <div className="fs-headline1">{Post.question_title}</div>
        <div className="d-flex pb8 mb16 bb bc-black-075">
          <p className="fc-black-500 mr24">
            Asked <span className="fc-black-800">{Asked}</span>
          </p>
          <p className="fc-black-500 mr24">
            Modified <span className="fc-black-800">{Modified}</span>
          </p>
          <p className="fc-black-500">
            Viewed <span className="fc-black-800">{Viewed}</span>
          </p>
        </div>
        <MainBox className="d-flex jc-space-between md:fd-column">
          <PostArea className="pr16">
            <div className="bb bc-black-075">
              <p
                dangerouslySetInnerHTML={{ __html: PostBody }}
                className="mb24"
              ></p>
              <p>
                {Post.question_tags.split(',').map((z, j) => {
                  return (
                    <a key={j} href="/" className="s-tag mr4">
                      {z}
                    </a>
                  );
                })}
              </p>
            </div>
            <div className="mt24">
              <div className="fs-headline1">{Answer.length} Answer</div>
              {Answer.map((x, i) => {
                return (
                  <div key={i} className="py12 pr24 bb bc-black-075">
                    <div
                      dangerouslySetInnerHTML={{ __html: x.answer_body }}
                      className="ta-left"
                    ></div>
                    <div className="ta-right">
                      <span>{x.answer_author}</span>
                      <span className="fc-black-500 mx16">{x.user_id}</span>
                      <span className="fc-black-500">{x.created_at}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <EditoreWrapper>
              <div className="my24 fs-headline1">Your Answer</div>
              <Editor
                initialValue="INSERT ANSWER"
                previewStyle="vertical" // 미리보기 스타일 지정
                height="300px" // 에디터 창 높이
                initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                hideModeSwitch="true"
                useCommandShortcut={true}
              />
              <div className="ta-right my12">
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
