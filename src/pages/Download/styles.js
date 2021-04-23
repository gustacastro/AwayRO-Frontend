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

    .title2 {
      width: 100%;
      border-bottom: 1px solid #8d5ae4;
    }

    h1 {
      padding: 10px;
      font-size: 18px;
      display: flex;

      .roxo {
        color: #8d5ae4;
        padding: 0px;
        border-bottom: 0px;
        margin-right: 5px;
      }
    }

    div {
      display: flex;
      margin-top: 20px;
      align-items: center;

      h2 {
        padding: 10px;
        width: 200px;
        background: #8d5ae4;
        font-size: 16px;
      }

      h3 {
        width: 50%;
        padding: 10px;
      }
    }

    .download {
      a {
        padding: 20px;
        margin: 10px 0;
        margin-right: 30px;
        border: 1px solid #8d5ae4;
        border-radius: 10px;
        transition: 0.2s;
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        &:hover {
          background: #f6641f;
        }
      }
    }

    .instruction {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 18px;
        width: 100%;
        border-bottom: 1px solid #8d5ae4;
      }

      h4 {
        padding: 10px;
        font-size: 16px;
        display: flex;

        .roxo {
          padding: 0px;
          color: #8d5ae4;
          margin-right: 5px;
        }

        .two {
          margin-right: 0px;
        }
      }
    }
  }
`;
