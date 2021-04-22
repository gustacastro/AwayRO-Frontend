import styled from 'styled-components';

import password from '../../assets/password.svg';
import user from '../../assets/user.svg';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;

  .title {
    margin: 0 auto;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 50px;
      color: #1e1d30;
      text-shadow: 0 0 3px rgb(141, 90, 228, 0.8); /* horizontal-offset vertical-offset 'blur' colour */
      -moz-text-shadow: 0 0 3px rgb(141, 90, 228, 0.8);
      -webkit-text-shadow: 0 0 3px rgb(141, 90, 228, 08);
    }

    h2 {
      margin-top: -25px;
      font-size: 40px;
      text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
      -moz-text-shadow: 0 0 2px #000;
      -webkit-text-shadow: 0 0 2px #000;
    }
  }

  Form {
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22%;

    p {
      margin-top: 20px;
      margin-bottom: 5px;
    }

    input {
      background: transparent;
      border: 0px;
      border: 1px solid transparent;
      border-bottom: 1px solid #8c5bdf;
      padding: 10px;
      color: #8c5bdf;
      font-size: 16px;
      transition: 0.5s;
    }

    .user {
      background-image: url(${user});
      background-repeat: no-repeat;
      background-size: 8%;
      background-position-y: 50%;
      background-position-x: 95%;
    }

    .password {
      background-image: url(${password});
    }

    input:focus {
      transition: 0.2s;
      border: 1px solid #8c5bdf;
    }

    input:hover {
      transition: 0.2s;
      border-right: 1px solid #8c5bdf;
      border-left: 1px solid #8c5bdf;
    }

    button {
      border-radius: 10px;
      padding: 10px 40px;
      margin-top: 50px;
      background: transparent;
      border: 1px solid #8c5bdf;
      transition: 0.2s;

      &:hover {
        background: #8c5bdf;
      }
    }

    span {
      white-space: nowrap;
      margin-top: 5px;
      font-size: 12px;
      color: #c3073f;
    }

    a {
      margin-top: 20px;
      color: #fff;

      &:hover {
        color: #8c5bdf;
      }
    }
  }
`;
