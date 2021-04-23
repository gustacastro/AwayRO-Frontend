import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function Header() {
  const [navBar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Container>
      <nav className={navBar ? 'content ative' : 'content'}>
        <Content>
          <div className="leftLogo">
            <Link to="/" className="linkleft">
              <h1 className="logotext">
                ragna<h1 className="logotextorange">Reborn</h1>
              </h1>
            </Link>
          </div>
          <div className="menunav">
            <ul className="menunavul">
              <Link to="/">
                <li>Principal</li>
              </Link>
              <Link to="/information">
                <li>Informações</li>
              </Link>
              <Link to="/download">
                <li>Downloads</li>
              </Link>
              <Link to="/">
                <li>Doação</li>
              </Link>
              <Link to="/">
                <li>Suporte</li>
              </Link>
              <Link to="/">
                <li>Fórum</li>
              </Link>
              <Link to="/">
                <li>Ranking</li>
              </Link>
              <Link to="/">
                <li>Database</li>
              </Link>
            </ul>
          </div>
          <div className="registerbutton">
            <Link to="/signin" className="registerlink">
              <h1 className="textnormalregister">Acessar</h1>
            </Link>
            <Link to="/signup" className="linkright">
              <h1 className="textnormal">Registro</h1>
            </Link>
          </div>
        </Content>
      </nav>
    </Container>
  );
}
