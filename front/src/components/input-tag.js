import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dummy2 from '../static/dummy2.json';

const InputTag = (props) => {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);
  const [isNotEmpty, setisNotEmpty] = useState(false);
  const [searchTag, setsearchTag] = useState('');
  const [tagDummy, settagDummy] = useState(dummy2.tags);

  const Tagging = async (e) => {
    setsearchTag(e.target.value);
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(searchTag);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  useEffect(() => {
    if (tagItem !== '') {
      setisNotEmpty(true);
    } else {
      setisNotEmpty(false);
    }
    const filterd = dummy2.tags.filter((x) => x.name.includes(tagItem));
    settagDummy(filterd);
  }, [tagItem]);

  useEffect(() => {
    submitTagItem();
    if (tagItem === '') {
      setTagList([]);
    }
  }, [searchTag]);
  useEffect(() => {
    props.setgetTag(tagList.join(','));
  }, [tagList]);
  return (
    <WholeBox>
      <TagBox className="s-input">
        <div className="d-flex g4">
          {tagList.map((tagItem, index) => {
            return (
              <TagItem className="s-tag" key={index}>
                <Text>{tagItem}</Text>
                <button
                  className="s-btn s-tag--dismiss"
                  onClick={deleteTagItem}
                >
                  X
                </button>
              </TagItem>
            );
          })}
        </div>
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
        />
      </TagBox>
      <div
        className={isNotEmpty ? 'is-visible s-popover' : 's-popover'}
        id="popover-example"
        role="menu"
      >
        <div className="s-popover--arrow s-popover--arrow__tl "></div>
        <TagWrapper className="d-flex g4 flex-wrap">
          {tagDummy.map((x, i) => {
            return (
              <button
                className="s-tag"
                key={i}
                onClick={Tagging}
                value={x.name}
              >
                {x.name}
              </button>
            );
          })}
        </TagWrapper>
      </div>
    </WholeBox>
  );
};
const TagWrapper = styled.div``;
const WholeBox = styled.div``;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  > * {
    flex: 0 1;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span``;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  margin-left: 4px;
  cursor: text;

  ~ {
    .s-popover {
      top: 40px;
    }
  }
`;

export default InputTag;
