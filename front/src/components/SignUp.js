import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import IMG1 from '../img/signup-img1.png';
import IMG2 from '../img/signup-img2.png';
import IMG3 from '../img/signup-img3.png';
import IMG4 from '../img/signup-img4.png';

const SignUpBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: calc(100vh - 50px);

  .signup-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
      rgb(0 0 0 / 10%) 0px 1px 4px;
    font-size: 15px;
    width: 316px;
    min-width: 250px;
    height: 500px;
    padding: 24px;
    text-align: left;
  }
  .input-box {
    display: flex;
    flex-direction: column;
  }
  .input-box > p {
    display: block;
    margin-bottom: 6px;
    font-weight: 700;
    text-align: left;
  }

  .signup-btn {
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
    cursor: pointer;
  }
  .signup-btn:hover {
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
    flex-direction: column;
    justify-content: flex-start;
    line-height: 15.7px;
    font-size: 12px;
    font-weight: 600;
    margin: 20px 0px 10px 0px;
    color: hsl(210, 8%, 45%);
    text-align: left;
  }

  .checkbox-box {
    display: flex;
    align-items: flex-start;
    margin: 10px 0px 5px;
  }
  .checkbox {
    width: 0.9rem;
    height: 0.9rem;
    border: 1.5px solid hsl(210, 8%, 85%);
    border-radius: 0.2rem;
    margin-top: 6px;
    margin-right: 4px;
  }
  .checkbox:hover {
    background-color: red;
    border: 2px solid red;
  }

  .last-text {
    font-size: 12px;
    line-height: 15.7px;
    font-weight: 700;
    color: hsl(210, 8%, 45%);
  }
  .last-text > a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
  }
  .last-text > a:hover {
    color: hsl(206, 85%, 57.5%);
  }

  .main-text-box {
    margin: 0px 48px 128px 0px;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 285px;
    > h1 {
      display: flex;
      text-align: left;
      margin-bottom: 20px;
    }
  }
  .left-text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: black;
    font-weight: 600;
  }
  .left-text {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  .left-text > span {
    text-align: left;
  }
  img {
    width: 24px;
    height: 21px;
    background-color: red;
    /* background-image: url(https://user-images.githubusercontent.com/104320234/188269169-bf7b987f-e597-46cd-a8e7-c227efde5679.png); */
    margin-right: 10px;
  }

  .left-text-mini {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
    font-weight: 600;
    line-height: 17px;
    color: hsl(210, 8%, 55%);
  }
  .left-text-mini > a {
    text-decoration: none;
    color: hsl(209, 100%, 37.5%);
    text-align: left;
  }
  .left-text-mini > a:hover {
    color: hsl(206, 85%, 57.5%);
  }
  .left-text-mini > p {
    text-align: left;
  }

  @media screen and (max-width: 375px) {
    .main-text-box {
      display: none;
    }
  }
`;

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // console.log(username, email, password);
  // const handledSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .post('http://localhost:3001/user', {
  //       id: 0,
  //       userName: username,
  //       userId: email,
  //       userPw: password,
  //     })
  //     .then((res) => console.log(res))
  //     .catch(
  //       (error) => console.error(error)

  //       // console.log(username, email, password);
  //       // console.log(BACKEND_URL);
  //     );
  // };

  return (
    <SignUpBox>
      <div className="main-text-box">
        <h1>Join Stack Overflow community</h1>
        <div className="left-text-box">
          <span className="left-text">
            <img src={IMG1} alt="text"></img>
            <span>Get unstuck — ask a question</span>
          </span>
          <span className="left-text">
            <img src={IMG2} alt="text"></img>
            <span>Unlock new privileges like voting and commenting</span>
          </span>
          <span className="left-text">
            <img src={IMG3} alt="text"></img>
            <span>Save your favorite tags, filters, and jobs</span>
          </span>
          <span className="left-text">
            <img src={IMG4} alt="text"></img>
            <span>Earn reputation and badges</span>
          </span>
          <div className="left-text-mini">
            <p>
              Collaborate and share knowledge with a private group for FREE.
            </p>
            <a href="/">
              Get Stack Overflow for Teams free for up to 50 users.
            </a>
          </div>
        </div>
      </div>

      <div className="signup-box">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // const params = {
            //   userName: username,
            //   userId: email,
            //   userPw: password,
            // };
            // axios
            //   .post(`/user`, { params })
            //   .then((res) => {
            //     console.log(JSON.stringify(res?.data));
            //     setUsername('');
            //     setEmail('');
            //     setPassword('');
            //     alert(`회원가입 성공`);
            //     navigate('/login');
            //   })
            //   .chatch((error) => {
            //     console.log(error);
            //   });

            try {
              const response = await axios({
                url: `/user`,
                method: 'POST',
                data: {
                  userName: username,
                  userId: email,
                  userPw: password,
                },
              });
              console.log(JSON.stringify(response?.data));
              setUsername('');
              setEmail('');
              setPassword('');
              alert(`회원가입 성공`);
              navigate('/login');
            } catch (e) {
              console.error(e);
              alert('회원가입 실패');
            }
          }}
        >
          <div className="input-box">
            <p>Name</p>
            <input
              className="input"
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-box">
            <p>ID</p>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
              type="text"
              placeholder="ID"
            ></input>
          </div>
          <div className="input-box">
            <p>Password</p>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <p className="text">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
          <div className="checkbox-box">
            <input className="checkbox" type="checkbox"></input>
            <p className="text">
              Opt-in to receive occasional product
              <br /> updates, user research invitations, <br />
              company announcements, and digests.
            </p>
          </div>
          <button type="submit" className="signup-btn">
            Log in
          </button>
        </form>
        <div className="last-text">
          <span>By clicking “Sign up”, you agree to our</span>
          <a href="/">terms of service</a>
          <span>, </span>
          <a href="/">privacy policy</a> <span> and</span>
          <a href="/">cookie policy</a>
        </div>
      </div>
    </SignUpBox>
  );
}

export default SignUp;
