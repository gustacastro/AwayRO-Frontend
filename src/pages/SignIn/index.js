import React from 'react';

// import { Form, Input } from '@rocketseat/unform';
import { BackGround, StatusNames, Wrapper, Status, Container } from './styles';

import logoCima from '../../assets/away-full-logo.png';

export default function SignIn() {
  return (
    <Wrapper>
      <Status>
        <div id="divStatus">
          <div id="divSides">
            <strong id="online">Online</strong>
          </div>
          <div id="divPlayerNum">
            <strong id="pPlayer">2785</strong>
          </div>
          <div id="divPlayerNum">
            <strong id="offline">Offline</strong>
          </div>
        </div>
        <div>
          <StatusNames>
            <div id="servidor">
              <strong>Servidor</strong>
            </div>
            <div id="player">
              <strong>Jogadores</strong>
            </div>
            <div id="woe">
              <strong>WoE</strong>
            </div>
          </StatusNames>
        </div>
      </Status>

      <Container>
        <div id="divimg">
          <img src={logoCima} alt="logocima" />
        </div>
        <BackGround>
          <h1>a</h1>
        </BackGround>
      </Container>
    </Wrapper>
  );
}
