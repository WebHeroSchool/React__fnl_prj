import React from 'react';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const props = {
   firstItem:'Пройти все уроки блока react.',
   secondItem:'Сдать тест по react.',
   thirdItem:'Сделать финальный проект.',
};
   
const App = () => (
   <div>
       <h1>Список дел:</h1>
       <ItemList props = {props}/>
       <Footer count = {3}/>
   </div>
 );
 
 export default App;
