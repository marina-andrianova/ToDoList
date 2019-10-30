import React from 'react';
import ReactDom from 'react-dom';


const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    )
};

const AppHeader= () => {
    return (
        <h1>My ToDo List</h1>
    )
};

const SearchPanel = () => {
    return (
        <input placeholder="search"/>
    )
};
const el = (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
);

ReactDom.render(el, document.getElementById('root'));
