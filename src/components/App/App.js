import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const props = () => {
   const props = [
      {
         value: 'Пройти все уроки блока react.',
      };
      {
         value: 'Сдать тест по react.',
      };
      {
         value: 'Сделать финальный проект.'
      }
];
   
   return (
      <div>
       <h1>Список дел:</h1>
       <ItemList props = {props}/>
       <Footer count = {3}/>
   </div>
  );      
};
 
export default App;
