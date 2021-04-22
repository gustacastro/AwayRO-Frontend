import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import ScrollToTop from '../../../components/ScrollToTop';
import Footer from '../../../components/Footer';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
