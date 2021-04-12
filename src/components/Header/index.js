import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/minimal.png';

import { Container, Content, MenuBar } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="AwayRO" />
          </Link>
        </nav>

        <aside>
          <MenuBar>
            <nav id="menu">
              <div>
                <ul>
                  <Link to="/">
                    <li>
                      <strong>Principal</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Informações</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Downloads</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Doação</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Suporte</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Fórum</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Ranking</strong>
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <strong>Database</strong>
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li>
                      <strong>Registro</strong>
                    </li>
                  </Link>
                </ul>
              </div>

              <Link to="/signin">
                <div id="menuAcess">
                  <strong>
                    Acessar <br />
                    Conta
                  </strong>
                </div>
              </Link>
            </nav>
          </MenuBar>
        </aside>
      </Content>
    </Container>
  );
}
