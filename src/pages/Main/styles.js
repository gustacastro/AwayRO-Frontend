import styled from 'styled-components';
import { darken } from 'polished';
import woe01 from '../../assets/woe01.png';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  z-index: 50;
  margin-top: 50px;

  // ================== Start Title ================ \\

  .divtitle {
    width: 100%;
    display: flex;

    .titleleft {
      padding: 0 50px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      h1 {
        padding-bottom: 20px;
        font-size: 25px;
      }

      p {
        margin-bottom: 50px;
      }

      .linkregister {
        text-align: center;
        border-radius: 5px;
        align-self: center;
        width: 25%;
        padding: 10px 0;
        color: #fff;
        background-color: #5e72e4;
        box-shadow: #5e72e4 0px 3px 5px, #5e72e4 0px 1px 2px;
        border-color: #5e72e4;
        transition: 0.2s;

        &:hover {
          background: ${darken(0.04, '#5e72e4')};
          box-shadow: ${darken(0.04, '#5e72e4')} 0px 3px 5px,
            #5e72e4 0px 1px 2px;
          border-color: ${darken(0.04, '#5e72e4')};
        }
      }
    }

    img {
      align-self: flex-end;
      width: 40%;
    }
  }

  // ================== End Title ================ \\

  // ================== Start Box Status Top ================ \\

  .boxstatustop {
    width: 100%;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2),
      0px -5px 5px 0px rgba(255, 255, 255, 0.05);
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 5px 200px;

    .online {
      font-size: 24px;
      color: #2dcd89;
    }

    .offline {
      font-size: 24px;
      color: #c3073f;
    }

    span {
      color: #606060;
      font-size: 16px;
    }
  }

  // ================== End Box Status Top =============== \\

  // ================== Start Cash ================ \\

  .cashtab {
    margin: 0 auto;
    width: 100%;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2),
      0px -5px 5px 0px rgba(255, 255, 255, 0.05);
    display: flex;
    padding: 50px;
    border-radius: 10px;
    margin: 50px 0;

    .divleft {
      background: #fff;
      border-radius: 5px;
      padding: 10px;
      -webkit-box-shadow: 0px 0px 85px 0px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 1);

      img {
        width: 120px;
      }
    }

    .divright {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 50px;
      text-align: center;

      h1 {
        color: #c3073f;
        padding-bottom: 20px;
        font-size: 30px;
      }
    }
  }

  // ================== End Cash ================ \\

  // ================== Start Tab 2 ================ \\

  .divtab2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      align-self: flex-end;
      align-self: center;
      width: 40%;
      margin-right: 20px;
    }

    .accordionright {
      display: flex;
      flex-direction: column;
    }
  }

  // ================== End Tab 2 ================ \\

  // ================== Start Noticies and Events ================ \\
  .noticieseventstabs {
    padding: 20px 0;
    width: 63%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
    }

    .linkevents {
      &:hover {
        color: #a81a25;
      }
    }
    .noticies {
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;

        .linknoticies {
          &:hover {
            color: #fea52d;
          }

          .linkevents {
            &:hover {
              color: #fea52d;
            }
          }
        }
      }
    }
  }

  // ================== End Noticies and Events ================ \\

  // ================== Start Woe Tab ================ \\

  .woetab {
    width: 80%;
    margin: 20px auto;
    border-radius: 10px;
    -webkit-box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    background-image: url(${woe01});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-size: 30%;
    padding: 50px;
    flex-direction: column;

    h1 {
      font-size: 18px;
    }

    .daystab {
      width: 50%;
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      align-items: center;
      text-align: left;

      .linewidth {
        width: 100px;
      }
    }

    .img {
      width: 15px;
      margin-right: 10px;
    }
  }

  // ================== End Woe Tab ================ \\
`;

export const Notices = styled.div`
  width: 100%;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  display: flex;
  font-size: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #fea52d;
    color: white;
  }

  h1 {
    font-size: 11px;
    padding-bottom: 5px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .date {
    color: white;
    margin: 0 auto;
    width: 65px;
    min-width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px 0 0 5px;
    background: #fea52d;

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

  .effectSide {
    background: #fea52d;
    width: 4px;
    border-radius: 0 5px 5px 0;
  }
`;

export const Events = styled.div`
  width: 100%;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  display: flex;
  font-size: 11px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #a81a25;
    color: white;
  }

  h1 {
    font-size: 11px;
    padding-bottom: 5px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .dateEvents {
    color: white;
    margin: 0 auto;
    width: 65px;
    min-width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    background: #a81a25;

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

  .effectSideEvents {
    background: #a81a25;
    width: 5px;
    border-radius: 5px 0 0 5px;
  }
`;
