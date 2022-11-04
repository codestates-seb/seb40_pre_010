import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../img/logo.svg';

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);
  .logo {
    background-image: url(${Logo});
    width: 35px;
    height: 50px;
  }

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    padding: 30px;
    margin: 24px 0px;
    background-color: white;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
      rgb(0 0 0 / 10%) 0px 1px 4px;
    text-align: left;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .input-box > p {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }

  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 0px;
    padding: 2px 9px;
    margin-top: 20px;
    transition: all 0.4s ease 0s;
    font-size: 0.85rem;
    color: white;
    background-color: hsl(206, 85%, 57.5%);
    width: 100%;
    height: 35px;
  }
  .login-btn:hover {
    background-color: hsl(209, 100%, 26%);
  }

  .input {
    padding: 8px 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    text-align: left;
  }

  .text {
    display: flex;
  }
  .text > a {
    margin-left: 10px;
    color: hsl(209, 100%, 32%);
    text-decoration: none;
  }
  .text > a:hover {
    margin-left: 10px;
    color: hsl(206, 85%, 57.5%);
    text-decoration: none;
  }
`;

function Login({ setIsLogin }) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  return (
    <LoginBox>
      <div className="logo"></div>
      <div className="login-box">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post(
                `/user/login`,
                JSON.stringify({ userId, userPw }),
                {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true,
                }
              );

              const { data: token, status } = response;
              if (status === 200 || status === '200') {
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                setUserId('');
                setUserPw('');
                setIsLogin(true);
                alert('로그인 성공');
                navigate('/');
              } else {
                alert('아이디 혹은 비밀번호를 다시 확인 해주세요 :)');
              }
            } catch (e) {
              console.error(e);
              alert('아이디 혹은 비밀번호를 다시 확인 해주세요 :)');
            }
          }}
        >
          <div className="input-box">
            <p>ID</p>
            <input
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              className="input"
              type="text"
              placeholder="ID"
            ></input>
          </div>
          <div className="input-box">
            <p>Password</p>
            <input
              value={userPw}
              onChange={(e) => {
                setUserPw(e.target.value);
              }}
              className="input"
              type="password"
              placeholder="password"
            ></input>
          </div>
          <button className="login-btn">Log in</button>
        </form>
      </div>
      <div className="text">
        <p>{`Don't have an account?`}</p>
        <a href="/">Sign up</a>
      </div>
    </LoginBox>
  );
}

export default Login;
