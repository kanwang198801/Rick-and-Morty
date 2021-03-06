import * as React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import Header from '../Header';

const Theme = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
export default Theme;

Theme.propTypes = {
  children: PropTypes.node,
};
