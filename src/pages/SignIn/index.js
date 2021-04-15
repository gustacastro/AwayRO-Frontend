import React from 'react';
import { Form, Input } from '@rocketseat/unform';

/*
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
*/

// import { signInRequest } from '../../store/modules/auth/action';

import { Wrapper } from './styles';

/* const schema = Yup.object().shape({
  userid: Yup.string().required('Usuário é obrigatório.'),
  user_pass: Yup.string()
    .min(6, 'Senha contém no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});
*/

export default function SignIn() {
  /* const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  // eslint-disable-next-line camelcase
  function handleSubmit({ userid, user_pass }) {
    dispatch(signInRequest(userid, user_pass));
  }
*/

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Wrapper>
      <div className="title">
        <h1>Área de acesso</h1>
      </div>
      <div className="loginpainel">
        <Form onSubmit={handleSubmit}>
          <p>Nome de usuário</p>
          <Input
            className="user"
            name="userid"
            autocomplete="off"
            placeholder="Usuário"
          />
          <p>Sua senha</p>
          <Input
            className="user password"
            type="password"
            name="user_pass"
            placeholder="Senha"
          />

          <button type="submit">Acessar</button>
        </Form>
      </div>
    </Wrapper>
  );
}
/*
  return (
    <Wrapper>
      <Container>
        <BackGround>
          <h1>Área de acesso</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <p>Nome de usuário</p>
            <Input name="userid" placeholder="Seu usuário" />
            <p>Sua senha</p>
            <Input name="user_pass" type="password" placeholder="Sua senha" />

            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
            <Link to="signup">Criar conta</Link>
          </Form>
        </BackGround>
      </Container>
    </Wrapper>
  );
}
*/
