import React from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  .search-bar {
    width: 100%;
    max-width: 600px;
    min-width: 100px;
    height: 27px;
    border-radius: 5px;
    border: solid 1px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 1;
    text-align: left;
    margin-left: 15px;
  }

  .search-bar__input {
    width: 100%;
    border: none;
    text-align: left;
    padding-left: 10px;
    overflow: auto;
    z-index: -1;
    font-size: 15px;
  }

  .search-bar__input:focus {
    box-shadow: 0 1px 6px skyblue;
    outline: none;
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 10px;
    border-radius: 5px;
  }

  .fa-search {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    .search-bar {
      display: none;
    }
  }
`;

const SearchInput = () => {
  return (
    <InputBox>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input className="search-bar__input" placeholder="Search"></input>
      </div>
    </InputBox>
  );
};

export default SearchInput;
