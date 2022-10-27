import React from 'react';
import styled from 'styled-components';

import Logo from '../img/logo.svg';
import MenuIcon from '../img/MenuIcon.svg';
import Xicon from '../img/Xicon.svg';

const MainNavBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  width: 100%;

  .main-box {
    box-shadow: 0 1px 6px rgb(98, 100, 100);
    width: 100%;
    z-index: 5000;
    background-color: rgb(247, 247, 248);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid rgb(244, 130, 37);
  }

  .logo {
    background-image: url(${Logo});
    display: inline-block;
    width: 187px;
    height: 50px;
    display: flex;
    align-items: center;
    transition-duration: 0.3s;
    margin-left: 15px;
  }

  @media screen and (max-width: 550px) {
    .logo {
      width: 35px;
    }
  }

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
`;

const Menu = styled.div`
  ul {
    display: flex;
    list-style: none;
  }
  > ul > a {
    color: black;
    text-decoration: none;
  }

  .menu-btn {
    margin: 0.5em;
    padding: 0.3em 0.5em 0.3em 0.5em;
    border-radius: 40px;
    font-size: 1em;
    color: rgb(59, 64, 69);
    transition-duration: 0.3s;
    cursor: pointer;
  }
  .menu-btn:hover {
    background-color: rgb(186, 191, 196);
    transition-duration: 0.3s;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .menu-btn {
      display: none;
    }
    .menu-icon {
      display: block;
      background-color: red;
      margin-top: 10px;
      width: 45px;
      height: 50px;
      background-image: url(${MenuIcon});
    }
  }

  @media screen and (max-width: 900px) {
    .btn2 {
      display: none;
    }
  }

  @media screen and (max-width: 1237px) {
    .btn1 {
      display: none;
    }
  }
`;

const Buttons = styled.div`
  min-width: 150px;

  .btn-login {
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-weight: normal;

    color: rgb(57, 115, 157);
    background-color: rgb(225, 236, 244);
    border-color: rgb(122, 167, 199);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
    border-radius: 3px;
    transition-duration: 0.3s;
  }
  .btn-login:hover {
    background-color: rgb(240, 248, 255);
    transition-duration: 0.3s;
  }

  .btn-logout {
    padding: 0.5em;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    font-weight: normal;

    color: white;
    background-color: rgb(10, 149, 255);
    /* border-color: rgb(122, 167, 199); */
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
    border-radius: 3px;
    transition-duration: 0.3s;
  }
  .btn-logout:hover {
    background-color: rgb(0, 100, 194);
    transition-duration: 0.3s;
  }
`;

function TopMainNav() {
  return (
    <MainNavBox>
      <div className="main-box">
        <Menu>
          <div className="menu-icon"></div>
          <ul>
            <a className="logo-box" href="/">
              <li>
                <div className="logo"></div>
              </li>
            </a>

            <li className="menu-btn">About</li>

            <li className="menu-btn btn2">Products</li>
            <a href="/">
              <li className="menu-btn btn1">For Teams</li>
            </a>
          </ul>
        </Menu>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input className="search-bar__input" placeholder="Search"></input>
        </div>
        <Buttons>
          <button className="btn-login">Log in</button>
          <button className="btn-logout">Log out</button>
        </Buttons>
      </div>
    </MainNavBox>
  );
}

export default TopMainNav;
