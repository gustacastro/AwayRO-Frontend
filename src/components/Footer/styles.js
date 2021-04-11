import styled from 'styled-components';

export const FooterDiv = styled.div`
  background: #5f5f5f;

  #backgroundFooter {
    max-width: 1100px;
    padding: 20px 0;
    max-width: 1100px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  #divTitle {
    display: flex;
    align-items: flex-start;
    text-align: center;

    h1 {
      color: orange;
      font-size: 16px;
    }

    img {
      margin-right: 50px;
    }

    #divNavegation {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      span {
        color: white;
        font-size: 10px;

        &:hover {
          color: orange;
        }
      }

      link {
        margin: 2px 0;
      }
    }
  }
`;
