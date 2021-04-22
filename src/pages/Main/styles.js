import styled from 'styled-components';

import titlebackground from '../../assets/new/titlebackground.png';
import guide from '../../assets/new/guide.png';
import vote from '../../assets/new/vote.png';
import database from '../../assets/new/database.png';
import woe from '../../assets/new/woe.png';
import regras from '../../assets/new/regras.png';

export const Wrapper = styled.div`
  width: 100%;

  .title {
    background-image: url(${titlebackground});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;

    .fade {
      width: 100%;
      height: 64px;
      background-image: linear-gradient(transparent, #1e1d31);
      margin-bottom: -115px;
      margin-top: 70px;
    }

    .center {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 400px;
      max-height: 200px;
      text-align: center;
      margin-top: 50px;

      .h1cima {
        font-size: 18px;
        margin-bottom: -10px;
        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
        -webkit-text-shadow: 0 0 2px #000;
      }

      .h1baixo {
        display: flex;
        font-size: 42px;
        align-items: baseline;

        justify-content: center;
        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;

        .h1roxo {
          font-size: 60px;
          color: #8c5bdf;
        }
      }

      span {
        font-size: 16px;

        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
      }

      a {
        border-radius: 5px;
        border: 1px solid #8d5ae4;
        padding: 10px 30px;
        transition: 0.3s;
        width: 50%;
        align-self: center;
        margin-top: 20px;
        font-size: 18px;
        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
        -webkit-text-shadow: 0 0 2px #000;

        &:hover {
          background: #8d5ae4;
        }
      }
    }
  }

  .serverstatus {
    width: 100%;
    margin: 0 auto;
    height: 180px;
    display: flex;
    text-align: center;
  }

  .servercontent {
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    width: 100%;
    max-width: 1200px;

    justify-content: space-between;
    padding: 0 50px;

    .contentleft {
      h1 {
        font-size: 50px;
        color: #1e1d30;
        text-shadow: 0 0 3px rgb(141, 90, 228, 0.8); /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 3px rgb(141, 90, 228, 0.8);
        -webkit-text-shadow: 0 0 3px rgb(141, 90, 228, 0.8);
      }

      h2 {
        margin-top: -25px;
        font-size: 40px;
        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
        -webkit-text-shadow: 0 0 2px #000;
      }
      .online {
        color: #66ee37;
      }

      .offline {
        color: #c3073f;
      }
    }

    .contentright {
      h1 {
        font-size: 50px;
        color: #1e1d30;
        text-shadow: 0 0 3px rgb(141, 90, 228, 0.8); /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 3px rgb(141, 90, 228, 0.8);
        -webkit-text-shadow: 0 0 3px rgb(141, 90, 228, 08);
      }

      h2 {
        color: #66ee37;
        margin-top: -25px;
        font-size: 40px;
        text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
        -webkit-text-shadow: 0 0 2px #000;
      }
    }
  }

  .info {
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    background: #292844;
    width: 800px;
    height: 400px;
    border-radius: 20px;
    -webkit-box-shadow: -5px 5px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -5px 5px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -5px 5px 15px 0px rgba(0, 0, 0, 0.75);
    text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
    -moz-text-shadow: 0 0 2px #000;
    -webkit-text-shadow: 0 0 2px #000;

    h2 {
      color: #8c5bdf;
      font-size: 16px;
    }

    h1 {
      margin-bottom: 10px;
      white-space: nowrap;
    }

    .infotxt {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;

      span {
        font-weight: bold;
      }
    }
  }

  .infoimg {
    margin-left: -50px;
    margin-top: -100px;
  }

  .linksrapido {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;

    .table {
      width: 300px;
      height: 100px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 10px;
      border: 1px solid #8c5bdf;
      background-image: url(${vote});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position-y: -80px;
      background-position-x: -120px;
      transition: 0.2s;

      &:hover {
        background: #8c5bdf;
      }

      h1 {
        font-size: 20px;
      }

      span {
        font-weight: bold;
      }
    }

    .guide {
      background-image: url(${guide});
      background-position-y: -30px;
      background-position-x: -100px;
    }

    .database {
      background-image: url(${database});
      background-position-y: -30px;
      background-position-x: -80px;
    }
  }

  .woe {
    width: 100%;
    height: 400px;
    -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    .woetable {
      width: 100%;
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      background-image: url(${woe});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position-y: 45px;
      background-position-x: 50px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      padding: 0 150px;

      h1 {
        color: #8c5bdf;
      }

      .right {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-end;

        .line {
          display: flex;
          padding: 10px 0;
          align-items: center;
          font-weight: bold;
          white-space: nowrap;

          .day {
            width: 150px;
          }

          .hour {
            width: 70px;
          }

          .traco {
            width: 25px;
          }

          span {
            font-size: 18px;
          }
        }
      }
    }
  }

  .numbers {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(90deg, #3ec3ca, #6641a4);

    .numberscenter {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      justify-content: space-between;
      height: 100%;
      align-items: center;

      img {
        width: 80px;
      }

      h1 {
        font-size: 50px;
        color: transparent;
        -webkit-text-shadow: 0px 0px 7px rgba(102, 65, 164, 0.5);
        -moz-text-shadow: 0px 0px 7px rgba(102, 65, 164, 0.5);
        text-shadow: 5px 2px 5px rgba(102, 65, 164, 0.5);
      }

      h2 {
        margin-top: -45px;
        font-size: 50px;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.1); /* horizontal-offset vertical-offset 'blur' colour */
        -moz-text-shadow: 0 0 2px #000;
        -webkit-text-shadow: 0 0 2px #000;
      }

      span {
        font-size: 19px;
      }
    }
  }

  .regras {
    width: 100%;
    height: 400px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    background-image: url(${regras});
    background-repeat: no-repeat;

    .regrastable {
      width: 100%;
      display: flex;
      flex-direction: column;
      max-width: 600px;

      h1 {
        color: #8c5bdf;
        font-size: 28px;
      }

      span {
        font-weight: bold;
      }

      .roxo {
        color: #8c5bdf;
      }
    }
  }
`;
