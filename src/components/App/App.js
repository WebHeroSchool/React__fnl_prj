import React from 'react';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import style from './App.module.css';

const App = () => {
   const props = [
      {
         value: 'Пройти все уроки блока react.'
      },
      {
         value: 'Сдать тест по react.'
      },
      {
         value: 'Сделать финальный проект.'
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
