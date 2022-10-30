import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const TextEditor = () => {
  const [text, setText] = useState('');
  const editorRef = React.createRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };
  return (
    <>
      <Editor
        initialValue=" " // 초기 입력값
        previewStyle="tab" // vertical로 설정시 미리보기 화면 분할가능
        initialEditType="markdown" // markdown or wysiwyg
        ref={editorRef}
        onChange={onChange}
        height="388px"
        width="850px"
      />
    </>
  );
};
export default TextEditor;
