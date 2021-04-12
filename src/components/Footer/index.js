import React from 'react';

import { Link } from 'react-router-dom';
import { FooterDiv } from './styles';

import imgfooter from '../../assets/imgfooter.png';

export default function Footer() {
  return (
    <FooterDiv>
      <div id="backgroundFooter">
        <div id="divTitle">
          <div>
            <img src={imgfooter} alt="imgfooter" width="150px" />
          </div>
          <div id="divNavegation">
            <div>
              <h1>Navegação</h1>
            </div>
            <div>
              <Link to="/">
                <span>❯ Principal</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Informações</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Downloads</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Doação</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Fórum</span>
              </Link>
            </div>
          </div>
          <div id="divNavegation">
            <div>
              <h1>Social Links</h1>
            </div>
            <div>
              <Link to="/">
                <span>❯ Facebook</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Youtube</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Twitter</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <span>❯ Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}
