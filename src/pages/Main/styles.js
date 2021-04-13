import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 2;
`;

export const Status = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 50px;
  background-color: white;
  border-radius: 0 0 15px 15px;
  text-align: center;
  -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

  strong {
    font-size: 20px;
  }

  #online {
    color: #1fce12;
  }

  #offline {
    color: red;
  }

  #pPlayer {
    color: #898989;
  }

  h1 {
    font-size: 32px;
  }

  #divPlayerNum {
    width: 100px;
  }

  #divStatus {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 9px;
  }

  #divSides {
    width: 100px;
  }
`;

export const StatusNames = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 70px;
    height: 15px;
    background-color: #5ce700;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  }

  strong {
    font-size: 11px;
    color: white;
  }

  #player {
    margin: 0 30px;
  }
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
    background: -webkit-linear-gradient(-176deg, #5ce700 24.8%, #fff 25%);
    background: -o-linear-gradient(-176deg, #5ce700 24.8%, #fff 25%);
    background: -moz-linear-gradient(-176deg, #5ce700 24.8%, #fff 25%);
    background: linear-gradient(-178.5deg, #5ce700 69.4%, #fff 70%);
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
  background-color: white;

  color: #898989;
  text-align: center;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

  h1 {
    padding-bottom: 20px;
  }

  verde {
    color: #1bba0f;
  }

  #quadradinhos {
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 500px;
    justify-content: center;
  }

  #centroplz {
    margin: 0 auto;
  }

  #database {
    margin-left: -550px;
    margin-top: -255px;
    width: 250px;
    height: 300px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    #imgdiv {
      width: 100%;
      margin-top: -20px;
      z-index: 3;

      img {
        margin: -25px;
        width: 65%;
        padding-bottom: 30px;
      }
    }

    input {
      -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 50px;
      height: 40px;
      margin: 0 0 10px;
      text-align: center;
      color: #1bba0f;
      font-weight: bold;
      background: #fff;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      //background: #1bba0f;
      background: #fff;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      color: #1bba0f;
      border: 0;
      border-radius: 50px;
      transition: 0.3s;

      &:hover {
        background: ${darken(0.03, '#66ff00')};
        color: white;
      }
    }

    #choice {
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      border-width: 0px;
      color: red;

      [type='radio']:checked,
      [type='radio']:not(:checked) {
        position: absolute;
        left: -9999px;
      }
      [type='radio']:checked + label,
      [type='radio']:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #898989;
      }
      [type='radio']:checked + label:before,
      [type='radio']:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
      }
      [type='radio']:checked + label:after,
      [type='radio']:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #5ce700;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      [type='radio']:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      [type='radio']:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    label {
      padding-right: 5px;
      padding-left: 2px;
    }

    Form {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }

    h1 {
      padding-bottom: 5px;
    }

    span {
      padding-bottom: 10px;
    }

    img {
      width: 48px;
      padding-bottom: 5px;
    }
  }
`;

export const Quadradim = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 120px;
  height: 120px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 48px;
    padding-bottom: 5px;
  }
`;

export const BackGroundNoticies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0px;
  padding-bottom: 120px;
  background-color: #5ce700;
  color: white;

  #painelRecentNews {
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
    }

    #space-between {
      width: 720px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      background: none;
      border: 0;
      font-size: 11px;
      color: white;
      font-weight: bold;
    }

    #nAeffect {
      width: 50px;
      height: 3px;
      background-color: orange;
      border-radius: 50px;
    }
  }

  #painelEvents {
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
    }

    #space-between {
      width: 350px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      background: none;
      border: 0;
      font-size: 11px;
      color: white;
      font-weight: bold;
    }

    #nAeffect {
      width: 50px;
      height: 3px;
      background-color: orange;
      border-radius: 50px;
    }
  }

  #nAeffectEvents {
    width: 45px;
    height: 3px;
    background-color: red;
    border-radius: 50px;
  }
`;

export const Notices = styled.div`
  width: 350px;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  background: #fff;
  color: #898989;
  display: flex;
  font-size: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: orange;
    color: white;
  }

  h1 {
    font-size: 11px;
    padding-bottom: 5px;
  }

  #text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  #date {
    color: white;
    margin: 0 auto;
    width: 65px;
    min-width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px 0 0 5px;
    background: orange;

    h1 {
      font-size: 28px;
      display: flex;
      justify-content: center;
      padding-bottom: 0px;
    }

    span {
      display: flex;
      justify-content: center;
      font-size: 11px;
    }
  }

  #effectSide {
    background: orange;
    width: 4px;
    border-radius: 0 5px 5px 0;
  }
`;

export const Events = styled.div`
  width: 350px;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  background: #fff;
  color: #898989;
  display: flex;
  font-size: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: red;
    color: white;
  }

  h1 {
    font-size: 11px;
    padding-bottom: 5px;
  }

  #text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  #dateEvents {
    color: white;
    margin: 0 auto;
    width: 65px;
    min-width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    background: red;

    h1 {
      font-size: 28px;
      display: flex;
      justify-content: center;
      padding-bottom: 0px;
    }

    span {
      display: flex;
      justify-content: center;
      font-size: 11px;
    }
  }

  #effectSideEvents {
    background: red;
    width: 5px;
    border-radius: 5px 0 0 5px;
  }
`;

export const Count = styled.div`
  -webkit-box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.2);

  #quadradinhos {
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-between;
  }
`;

export const QuadradimBaixo = styled.div`
  margin: 0 auto;
  margin-top: -60px;
  margin-bottom: 50px;
  background: white;
  width: 150px;
  height: 120px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #898989;
  z-index: 2;

  img {
    width: 48px;
    padding-bottom: 5px;
  }

  strong {
    font-size: 16px;
  }

  span {
    font-size: 13px;
  }

  #textCollum {
    display: flex;
    flex-direction: column;
  }
`;

export const Guild = styled.div`
  background: white;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  z-index: 1;

  h1 {
    font-size: 18px;
    color: #898989;
  }

  span {
    font-size: 16px;
    color: #898989;
  }

  #divGuildSeparation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #divImg {
    margin-top: -119px;
    img {
      width: 400px;
    }
  }

  #divWoe {
    margin-left: 100px;
    width: 500px;
    height: 200px;
  }

  #centerDays {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #sidebyside {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 5px;
      width: 16px;
    }
  }

  #divDay {
    width: 120px;
    text-align: left;
  }

  #divName {
    width: 120px;
    text-align: left;
  }

  #divHourInicial {
    padding-right: 5px;
    margin-right: 5px;
    border-right: 1px solid #eee;
  }
`;

export const Days = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const Footer = styled.div`
  background: #5f5f5f;
  margin-top: -5px;
  height: 5px;
`;
