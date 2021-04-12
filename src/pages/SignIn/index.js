import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/action';

import { BackGround, StatusNames, Wrapper, Status, Container } from './styles';

import logoCima from '../../assets/away-full-logo.png';

const schema = Yup.object().shape({
  userid: Yup.string().required('Usuário é obrigatório.'),
  user_pass: Yup.string()
    .min(6, 'Senha contém no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  // eslint-disable-next-line camelcase
  function handleSubmit({ userid, user_pass }) {
    dispatch(signInRequest(userid, user_pass));
  }

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
          <h1>Área de acesso</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="userid" placeholder="Seu usuário" />
            <Input name="user_pass" type="password" placeholder="Sua senha" />

            <button type="submit">Acessar</button>
            <Link to="signup">Criar conta</Link>
          </Form>
        </BackGround>
      </Container>
    </Wrapper>
  );
}
