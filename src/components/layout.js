import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
