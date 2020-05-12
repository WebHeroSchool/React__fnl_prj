import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

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

export default Item;
