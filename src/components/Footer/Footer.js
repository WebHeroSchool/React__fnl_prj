import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (<p className={styles.text}>Вот сколько дел еще осталось сделать: { count }</p>);

Footer.defaultProps ={
    count: 4
};

Footer.PropTypes ={
    count: PropTypes.number.isRequired
};
 
export default Footer;
