/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Choice, useField } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import ReactDatepicker, { registerLocale } from 'react-datepicker';
import el from 'date-fns/locale/pt-BR'; // register it with the name you want

import 'react-datepicker/dist/react-datepicker.css'; // react datepicker css
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';

import { BackGround, StatusNames, Wrapper, Status, Container } from './styles';

import Accordion from '../../components/Accordion/accordion';

import logoCima from '../../assets/away-full-logo.png';

import { signUpRequest } from '../../store/modules/auth/action';

// the locale you want
registerLocale('pr-br', el);

const schema = Yup.object().shape({
  userid: Yup.string().required('Usuário é obrigatório.'),
  user_pass: Yup.string()
    .min(6, 'Senha contém no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  sex: Yup.mixed().oneOf(['M', 'F', 'S']).required('Sexo é obrigatório'),
  birthdate: Yup.date().required('Data de nascimento é obrigatório'),
  confirm_user_pass: Yup.string().when('user_pass', (user_pass, field) =>
    user_pass
      ? field.required().oneOf([Yup.ref('user_pass')], 'As senhas não batem')
      : field
  ),
});

export default function SignUp() {
  const dispatch = useDispatch();

  const Datepicker = ({ name, label }) => {
    const ref = useRef(null); // for ref manipulation purposes
    const { fieldName, registerField, defaultValue, error } = useField(name); // the name of the prop in form object is used here
    // the state of our datepicker component

    useEffect(() => {
      registerField({
        // here, we're registering the field in the whole form
        name: fieldName,
        ref: ref.current,
        path: 'props.selected', // this is the path to selected date in ReactDatepicker (wich is the selected prop)
        clearValue: (pickerRef) => {
          // for reset purposes
          pickerRef.clear();
        },
      });
    }, [fieldName]);

    const [selectedDate, setSelectedDate] = useState(defaultValue);
    const years = range(1980, getYear(new Date()) + 1, 1);
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return (
      <>
        {/* the label is like label in Unform Input component */}
        {!!label && <label htmlFor="datepicker">{label}</label>}
        <ReactDatepicker
          id="birthday"
          name={fieldName}
          locale="pr-br"
          dateFormat="dd/MM/yyyy"
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {'>'}
              </button>
            </div>
          )}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          ref={ref}
        />
        {/* the error is like error in Unform Input component */}
        {error && <span>{error}</span>}
      </>
    );
  };

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ userid, user_pass, email, birthdate, sex }) {
    console.tron.log(userid, user_pass, email, birthdate, sex);
    dispatch(signUpRequest(userid, user_pass, email, birthdate, sex));
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
          <h1>Área de registro</h1>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="userid" placeholder="Seu usuário" />
            <Input name="user_pass" type="password" placeholder="Sua senha" />
            <Input
              name="confirm_user_pass"
              type="password"
              placeholder="Confirmar senha"
            />
            <Input name="email" type="email" placeholder="Seu email" />
            <div id="divRadio">
              <Choice
                name="sex"
                options={[
                  { value: 'M', label: 'Masculino' },
                  { value: 'F', label: 'Feminino' },
                ]}
              />
            </div>
            <div id="date">
              <Datepicker name="birthdate" label="Data de nascimento" />
            </div>
            <button type="submit">
              {loading ? 'Carregando...' : 'Cadastrar'}
            </button>
            <Link to="signin">Já tenho conta</Link>
          </Form>
          <Accordion
            title="Válidações para criar conta"
            content="
            <h1>Sua conta precisa seguir as seguintes normas:</h1>
            </br>
            <strong>Usuário: </strong><p>Ter no mínimo 4 caracteres.</p>
            <strong>Senha: </strong><p>Ter no mínimo 6 caracteres.</p>
            <strong>E-mail: </strong><p>Conter @ e .com para ser um e-mail válido.</p>
            <strong>Sexo: </strong><p>Selecionar Masculino ou Feminino.</p>
            <strong>Data de nascimento: </strong><p>Colocar por que pode haver algumas surpresas. ;)</p>
            "
          />
        </BackGround>
      </Container>
    </Wrapper>
  );
}
