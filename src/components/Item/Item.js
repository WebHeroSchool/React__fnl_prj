import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({value, isDone, index, onClickDone, id}) => (
<label 
    htmlFor={`checkbox[${index}]`} 
    onClick={() => onClickDone(id)}
    className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone,
    })}>
    {value}
</label>);

Item.defaultProps ={
    value: 'Задание',
    isDone: false
};

Item.PropTypes = {
    onClickDone: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Item;
