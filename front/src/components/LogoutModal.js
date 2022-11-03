import React from 'react';
import styled from 'styled-components';
import Profile from '../img/user-solid.svg';

const Modal = styled.div`
  position: absolute;
  margin-top: 280px;
  margin-left: 50%;

  .modal {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    row-gap: 10px;
    top: 105%;
    width: 250px;
    height: 220px;
    border-radius: 10px;
    background-color: white;
    box-shadow: grey 0px 0px 5px;
    color: hsl(210, 8%, 35%);
  }
  .profile {
    width: 70px;
    height: 80px;
    background-image: url(${Profile});
  }
  .logout-btn {
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
    width: max-content;
    height: 32px;
  }

  @media screen and (max-width: 375px) {
    .modal {
      width: 150px;
      padding: 0px;
    }
    .modal > p {
      font-size: 12px;
    }
    .profile {
      width: 61.5px;
      height: 70px;
      background-image: url(${Profile});
    }
  }
`;

const LogoutModal = () => {
  return (
    <Modal>
      <div className="modal">
        <div className="profile"></div>
        <h3 className="uesr-name">박여울</h3>
        <p className="uesr-mail">qyoong3579@gmail.com</p>
        <button
          className="logout-btn"
          onClick={() => {
            // localStorage.removeItem('token');
            // localStorage.removeItem('userId');
            // setIsLogin(false);
          }}
        >
          Log Out
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
