import styled from 'styled-components';

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
  z-index: 1;
  color: #898989;
  text-align: center;

  verde {
    color: #1bba0f;
  }
`;
