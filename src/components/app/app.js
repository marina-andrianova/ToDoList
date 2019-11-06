import React from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

const App = () => {
// прредставим каждый элемент из списка дел todo-list-item в отдельный объект
// заносим это все в App чтобы если вдруг данные получим с сервера, перересуем только App
   const todoDate = [
       {label: 'Drink coffee', important: false, id: 1},
       {label: 'Going to the gum', important: true, id: 2},
       {label: 'Have a breakfast ', important: false, id: 3}
   ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
            </div>
            <TodoList todos = {todoDate}
                      onDeleted = {(id) => console.log('deleted', id) }/>
        </div>
    )
};


export default App;
