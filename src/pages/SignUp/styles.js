import styled from 'styled-components';
import { darken } from 'polished';

import password from '../../assets/password.svg';
import user from '../../assets/user.svg';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 20px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 150px;

  .title {
    margin: 0 auto;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 50px;
      color: #1e1d30;
      text-shadow: 0 0 3px rgb(141, 90, 228, 0.8); /* horizontal-offset vertical-offset 'blur' colour */
      -moz-text-shadow: 0 0 3px rgb(141, 90, 228, 0.8);
      -webkit-text-shadow: 0 0 3px rgb(141, 90, 228, 08);
    }

    h2 {
      margin-top: -25px;
      font-size: 40px;
      text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
      -moz-text-shadow: 0 0 2px #000;
      -webkit-text-shadow: 0 0 2px #000;
    }
  }

  Form {
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22%;

    .Radio {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0 20px;
      align-items: center;
      justify-content: center;
      min-height: 45px;
      max-width: 100%;

      [type='radio']:checked,
      [type='radio']:not(:checked) {
        position: absolute;
        left: -9999px;
      }
      [type='radio']:checked + label,
      [type='radio']:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
      }
      [type='radio']:checked + label:before,
      [type='radio']:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
      }
      [type='radio']:checked + label:after,
      [type='radio']:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #8c5bdf;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      [type='radio']:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      [type='radio']:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      span {
        width: 100%;
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 10px;
      }
    }

    p {
      margin-top: 20px;
      margin-bottom: 5px;
    }

    input {
      background: transparent;
      border: 0px;
      border: 1px solid transparent;
      border-bottom: 1px solid #8c5bdf;
      padding: 10px;
      color: #8c5bdf;
      font-size: 16px;
      transition: 0.5s;
    }

    .user {
      background-image: url(${user});
      background-repeat: no-repeat;
      background-size: 8%;
      background-position-y: 50%;
      background-position-x: 95%;
    }

    .password {
      background-image: url(${password});
    }

    input:focus {
      transition: 0.2s;
      border: 1px solid #8c5bdf;
    }

    input:hover {
      transition: 0.2s;
      border-right: 1px solid #8c5bdf;
      border-left: 1px solid #8c5bdf;
    }

    .button {
      border-radius: 10px;
      padding: 10px 40px;
      margin-top: 50px;
      border: 1px solid #8c5bdf;
      background: transparent;
      width: 60%;

      &:hover {
        background: #8c5bdf;
      }
    }

    button {
      margin: 0 5px;
      border-radius: 10px;
      background: #8c5bdf;
      border-color: transparent;
      width: 20px;

      &:hover {
        background: ${darken(0.05, '#8c5bdf')};
      }
    }

    span {
      white-space: nowrap;
      margin-top: 5px;
      font-size: 12px;
      color: #c3073f;
    }

    a {
      margin-top: 20px;
      color: #f4571d;

      &:hover {
        color: ${darken(0.1, '#f4571d')};
      }
    }

    .react-datepicker__header {
      background-color: #8c5bdf;
      border-bottom: 1px solid #8c5bdf;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      color: #fff;
      border: 1px solid transparent;
      transition: 0.2s;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
      background-color: transparent;
      color: #fff;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
      background-color: #8c5bdf;
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
      background-color: transparent;
      border: 1px solid #8c5bdf;
    }

    .react-datepicker {
      background: #1a1a1d;
      border: 1px solid #8c5bdf;
    }

    .react-datepicker-popper[data-placement^='bottom']
      .react-datepicker__triangle,
    .react-datepicker-popper[data-placement^='bottom']
      .react-datepicker__triangle::before {
      border-bottom-color: #8c5bdf;
    }
  }
`;
