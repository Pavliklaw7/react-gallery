import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export const Header = ({ headerTitle }) => (
  <>
    <header className="header">
      <h2>{headerTitle}</h2>
    </header>
  </>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
