import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <div className="test-section-1"></div>
      <div className="test-section-2"></div>
      <footer></footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
