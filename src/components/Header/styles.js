import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding-left: 30px;
  -webkit-box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.7);
  box-shadow: 0px -1px 11px 0px rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50%;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const MenuBar = styled.li`
  display: flex;

  #menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #menu ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #menu ul li {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    color: #1bba0f;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.01, '#66ff00')};
      color: #fff;
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.1),
        inset -6px -6px 10px 0 rgba(255, 255, 255, 0.3);
    }
  }

  #menuAcess {
    width: 140px;
    height: 80px;
    background: linear-gradient(75deg, #1fce12, #66ff00);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${darken(0.01, '#00A8FF')};
      color: #fff;
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
        inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    }
  }

  #menuAcess strong {
    font-size: 20px;
    color: #fff;
  }
`;
