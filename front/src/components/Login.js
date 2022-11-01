import React, { useState } from 'react';
import styled from 'styled-components';
// import {BACKEND_URL } from '/';
import { useRecoilState } from 'recoil';
import { userState } from '../_actions/user';
import { useNavigate } from 'react-router-dom';
// import dumy from '../static/dummy3.json';

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
    height: 360px;
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

function Login() {
  const [email, setEmeil] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useRecoilState(userState); //이건 이제 이 페이지에서만 쓸 수 있는 상태가 아님
  //로그인성공시 메인 페이지로 이동
  const navigate = useNavigate();

  return (
    <LoginBox>
      <div className="logo"></div>
      <div className="login-box">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const data = await axios({
                url: `${BACKEND_URL}/user/login`,
                method: 'POST',
                data: {
                  email,
                  password,
                },
              });
              setEmeil('');
              setPassword('');
              setUser(data.data);
              alert('로그인 성공!');
              navigate('/');
            } catch (e) {
              console.log(e);
              alert('로그인 실패!');
            }
          }}
        >
          <div className="input-box">
            <p>Email</p>
            <input
              name="username"
              className="input"
              type="text"
              placeholder="Email"
            ></input>
          </div>
          <div className="input-box">
            <p>Password</p>
            <input
              name="password"
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
