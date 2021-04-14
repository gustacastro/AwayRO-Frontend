import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;

  .content {
    transition: background-color 0.5s ease;
  }

  .content.ative {
    background: #1a1a1d;
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
      color: #c3073f;
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
        color: #c3073f;
        cursor: pointer;
        padding-bottom: 5px;
        border-bottom: 1px solid #c3073f;
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

    .registerlink {
      margin-right: 15px;
      font-weight: bold;
      padding: 5px 0px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #c3073f;
        transition: 0.3s;
        border-bottom: 1px solid #c3073f;
      }
    }

    .linkright {
      &:hover {
        .textnormal {
          color: #2579f6;
        }

        .textorange {
          color: #2579f6;
        }
      }

      .textnormal {
        font-size: 13px;
        color: #fff;
      }

      .textorange {
        font-size: 20px;
        color: #c3073f;
      }
    }
  }

  // ================= end registerbutton =================
`;
