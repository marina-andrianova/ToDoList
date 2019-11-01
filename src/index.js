import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
// прредставим каждый элемент из списка дел todo-list-item в отдельный объект
// заносим это все в App чтобы если вдруг данные получим с сервера, перересуем только App
   const todoDate = [
       {label: 'Drink coffee', important: false},
       {label: 'Going to the gum', important: true},
       {label: 'Have a breakfast ', important: false}
   ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoDate}/>
        </div>
    )
};


ReactDom.render(<App />, document.getElementById('root'));
