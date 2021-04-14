import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #divimg {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: red;
    background: -webkit-linear-gradient(-176deg, #4d4e71 24.8%, #315e5e 25%);
    background: -o-linear-gradient(-176deg, #4d4e71 24.8%, #315e5e 25%);
    background: -moz-linear-gradient(-176deg, #4d4e71 24.8%, #315e5e 25%);
    background: linear-gradient(-178.5deg, #4d4e71 69.4%, #315e5e 70%);
    z-index: 2;

    img {
      width: 25%;
      max-width: 320px;
    }
  }
`;

export const BackGround = styled.div`
  padding-top: 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #315e5e;
  z-index: 1;
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
