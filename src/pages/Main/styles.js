import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  background: #1a1a1d;

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

    .online.offline {
      color: #c3073f;
    }

    span {
      color: #606060;
      font-size: 16px;
    }
  }

  // ================== End Box Status Top =============== \\

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
`;
