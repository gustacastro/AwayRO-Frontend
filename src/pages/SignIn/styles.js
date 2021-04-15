import styled from 'styled-components';
import { darken } from 'polished';

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
    transform: rotate(-5deg);
    display: flex;
    justify-content: center;
    border-radius: 20px;
    padding: 20px 70px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2),
      0px -5px 5px 0px rgba(255, 255, 255, 0.05);

    h1 {
      color: #c3073f;
      font-size: 24px;
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
      border-bottom: 1px solid #c3073f;
      padding: 10px;
      color: #c3073f;
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
      border: 1px solid #c3073f;
    }

    button {
      border-radius: 10px;
      padding: 10px 40px;
      margin-top: 50px;
      background: #c3073f;
      border-color: transparent;

      -webkit-box-shadow: 0px 0px 10px 0px rgba(195, 7, 63, 1);
      -moz-box-shadow: 0px 0px 10px 0px rgba(195, 7, 63, 1);
      box-shadow: 0px 0px 10px 0px rgba(195, 7, 63, 1);

      &:hover {
        background: ${darken(0.05, '#c3073f')};
      }
    }
  }
`;

/*

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BackGround = styled.div`
  padding-top: 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #315e5e;
  color: #fff;
  text-align: center;
  align-items: center;

  form {
    max-width: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
      -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 50px;
      height: 40px;
      margin: 0 0 10px;
      text-align: center;
      color: #fea52d;
      font-weight: bold;
      background: #4d4e6f;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    span {
      color: #fff;
      font-size: 12px;
      margin: 0 0 10px;
      padding: 5px 10px;
      background-color: #f64c75;
      border-radius: 50px;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      background: #fda540;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 50px;
      transition: 0.3s;

      &:hover {
        background: ${darken(0.01, '#53a3fb')};
        color: white;
      }
    }

    p {
      margin-bottom: 2px;
      color: orange;
      font-size: 12px;
    }

    a {
      margin-top: 20px;
      color: orange;
      font-weight: bold;
    }
  }
`;

*/
