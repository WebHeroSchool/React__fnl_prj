import React from 'react';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import styles from './App.module.css';

const App = () => {
   const props = [
     {
         value: 'Закончить блок JS.',
         isDone: false
      },
      {
         value: 'Пройти все уроки блока react.',
         isDone: true
      },
      {
         value: 'Сдать тест по react.',
         isDone: false
      },
      {
         value: 'Сделать финальный проект.',
         isDone: true
      }
];
   
   return (
    <div className={styles.wrap}>
        <h1>Список дел:</h1>
        <InputItem/>
        <ItemList props = {props}/>
        <Footer count = {3}/>
    </div>
  );      
};
 
export default App;
