import React, { forwardRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';

const EditorWrapper = styled.div`
  .toastui-editor-defaultUI-toolbar {
    flex-wrap: wrap;
  }
  .toastui-editor-dropdown-toolbar {
    height: auto;
    flex-wrap: wrap;
  }
`;
const TextEditor = forwardRef((props, ref) => {
  return (
    <EditorWrapper>
      <Editor
        initialValue=" " // 초기 입력값
        previewStyle="tab" // vertical로 설정시 미리보기 화면 분할가능
        initialEditType="markdown" // markdown or wysiwyg
        height="500px"
        onChange={props.onChange}
        ref={ref}
        // width="100%"
      />
    </EditorWrapper>
  );
});
TextEditor.displayName = 'TextEditor';

export default TextEditor;
