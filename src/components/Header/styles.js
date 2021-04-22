import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;

  background: rgba(30, 29, 49, 0.8);

  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);

  .content {
    transition: background-color 0.5s ease;
  }

  .content.ative {
    background: #1e1d31;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  // ================= start left logo box =================

  .logotext {
    font-size: 20px;
    display: flex;
    align-items: baseline;

    .logotextorange {
      font-size: 26px;
      color: #8d5ae4;
    }
  }

  // ================= end left logo box =================

  // ================= start menunav =================

  .menunav {
    li {
      display: inline;
      margin: 0 8px;
      color: #fff;
      transition: 0.3s;

      &:hover {
        color: #8d5ae4;
        cursor: pointer;
        padding-bottom: 5px;
      }
    }
  }

  // ================= end menunav =================

  // ================= start registerbutton =================

  .registerbutton {
    display: flex;
    flex-direction: row;
    text-align: right;
    align-items: center;
    font-size: 12px;

    .registerlink {
      margin-right: 15px;
      font-weight: bold;
      padding: 5px 0px;

      &:hover {
        color: #8d5ae4;
        transition: 0.3s;
      }
    }

    .linkright {
      border-radius: 5px;
      border: 1px solid #8d5ae4;
      padding: 10px 30px;
      transition: 0.3s;

      &:hover {
        background: #8d5ae4;
      }

      .textnormal {
        font-size: 18px;
        color: #fff;
      }
    }
  }

  // ================= end registerbutton =================
`;
