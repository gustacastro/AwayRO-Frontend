import styled from 'styled-components';

export const Container = styled.div`
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

  .table {
    width: 100%;
    margin-top: 50px;

    h3 {
      width: 50%;
      padding: 10px;
      border-bottom: 1px solid #8d5ae4;
    }

    table {
      margin: 10px;
      font-weight: bold;

      .left {
        width: 120px;
        height: 30px;
        background: #8d5ae4;
        padding: 0 10px;
      }

      .right {
        width: 250px;
        padding: 0 10px;
      }

      .arroba {
        padding: 0 2px;
        color: #f6641f;
      }

      .extras {
        background: #f6641f;
        display: flex;
        justify-content: center;
      }

      .extras2 {
        width: 400px;
      }

      .title {
        padding: 10px;
        font-size: 16px;
      }

      .vip {
        background: #c3073f;
      }

      .arrobavip {
        color: #C3073F;
      }
      }
    }
  }

  .extras {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h3 {
      width: 550px;
      border-bottom: 1px solid #f6641f;
    }
  }

  .infobackground {
    width: 350px;
    margin-top: -350px;
    margin-left: 800px;
  }

  .extrasbackground {
    width: 400px;
    margin-top: -600px;
  }
`;
