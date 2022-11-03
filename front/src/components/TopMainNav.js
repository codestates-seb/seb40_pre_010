import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.svg';
import MenuIcon from '../img/MenuIcon.svg';
import Xicon from '../img/Xicon.svg';
import BoxIcon from '../img/inbox-solid.svg';
import Trophy from '../img/trophy-solid.svg';
import Question from '../img/circle-question-solid.svg';
import Profile from '../img/user-solid.svg';
import Search from '../img/magnifying-glass-solid.svg';

const MainNavBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100%;
  z-index: 1;

  .main-box {
    box-shadow: 0 1px 6px rgb(98, 100, 100);
    width: 100%;
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

  /* @media screen and (max-width: 550px) {
    .logo {
      width: 35px;
    }
  } */

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
    .login-icons {
      width: 100px;
      margin-left: 5px;
      margin-right: 5px;
    }
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
    margin-top: 9px;
  }

  .menu-btn {
    margin: 20px 2px 10px 2px;
    padding: 5px 15px 5px 15px;
    border-radius: 40px;
    font-size: 1em;
    color: rgb(59, 64, 69);
    transition-duration: 0.3s;
    cursor: pointer;
  }
  .btn2 {
    min-width: 90px;
  }
  .btn3 {
    min-width: 95px;
    padding-right: 0px;
    margin-right: 0px;
  }

  .menu-btn:hover {
    background-color: rgb(186, 191, 196);
    transition-duration: 0.3s;
  }

  .hiden-menu-icon {
    display: none;
  }
  @media screen and (max-width: 1050px) {
    .logo {
      width: 35px;
    }

    .hiden-menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      width: 46px;
      height: 50px;
      padding: 12px;
      transition-duration: 0.3s;
    }
    .hiden-menu-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      width: 35px;
      height: 100%;
      background-image: url(${MenuIcon});
      cursor: pointer;
      transition-duration: 0.3s;
    }
    .logo {
      margin-left: 2px;
    }

    .login-icon2 {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .menu-btn {
      display: none;
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
  .logout-state {
    min-width: 150px;
  }
  .login-state {
    min-width: 300px;
    height: 100%;
    padding-top: 10px;
  }
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

  .login-icons {
    display: flex;
    align-items: center;
    column-gap: 2px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .login-icon {
    min-width: 29px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    padding: 4px;
    margin-left: 5px;
    margin-right: 5px;
    transition-duration: 0.3s;
    cursor: pointer;
  }
  .login-icon_ {
    width: 100%;
    height: 100%;
  }

  .login-icon1 {
    background-image: url(${BoxIcon});
  }
  .login-icon2 {
    background-image: url(${Trophy});
  }
  .login-icon3 {
    background-image: url(${Question});
  }
  .login-icon4 {
    background-image: url(${MenuIcon});
  }
  .profile {
    width: 18.5px;
    background-image: url(${Profile});
  }
  .search-login-icon {
    display: none;
  }

  .logout-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    transition: all 0.4s ease 0s;
    font-size: 15px;
    color: white;
    background-color: #8d192b;
    width: max-content;
    height: 32px;
  }
  .logout-btn:hover {
    background-color: #dc143c;
  }

  @media screen and (max-width: 375px) {
    .search-login-icon {
      min-width: 29px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      padding: 4px;
      margin-left: 5px;
      margin-right: 5px;
      transition-duration: 0.3s;
      cursor: pointer;
    }
    /* .search {
      background-image: url(${Search});
    } */
    .login-icon {
      display: none;
    }
    .login-state {
      min-width: 180px;
      height: 100%;
      padding-top: 10px;
    }
  }
`;

function TopMainNav({ isLogin, setIsLogin }) {
  // const [user, setUser] = useRecoilState(userState);
  const [hidenMenu, setHideMenu] = useState(false);

  return (
    <MainNavBox>
      {/* <LogoutModal></LogoutModal> */}
      <div className="main-box">
        <Menu>
          <ul>
            <div className="hiden-menu-icon">
              <div className="hiden-menu-btn"></div>
            </div>
            <a className="logo-box" href="/">
              <li>
                <div className="logo"></div>
              </li>
            </a>

            <li className="menu-btn">About</li>

            <li className="menu-btn btn2">Products</li>

            <li className="menu-btn btn3">For Teams</li>
          </ul>
        </Menu>
        {/* <SearchInput></SearchInput> */}
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input className="search-bar__input" placeholder="Search"></input>
        </div>
        <Buttons>
          {isLogin ? (
            <div className="login-state">
              <ul className="login-icons">
                {/* <li className="search-login-icon">
                  <div className="login-icon_ search"></div>
                </li> */}
                <li className="login-icon">
                  <div className="login-icon_ profile"></div>
                </li>
                <li className="login-icon">
                  <div className="login-icon_ login-icon1 "></div>
                </li>
                <li className="login-icon">
                  <div className="login-icon_ login-icon2"></div>
                </li>
                <li className="login-icon">
                  <div className="login-icon_  login-icon3"></div>
                </li>
                <li className="login-icon ">
                  <div className="login-icon_ login-icon4"></div>
                </li>
                <li className="logout-btn">
                  <button
                    className="logout-btn"
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('userId');
                      setIsLogin(false);
                    }}
                  >
                    logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="logout-state">
              <Link to="/login">
                <button className="btn-login">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="btn-logout">Sign Up</button>
              </Link>
            </div>
          )}
        </Buttons>
      </div>
    </MainNavBox>
  );
}

export default TopMainNav;
