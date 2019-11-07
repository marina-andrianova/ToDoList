import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';
//работаем со всей коллексией ДЕЛ

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map((item) => {
        // label = {item.label}
        // important = {item.important}этот код можно написать через спред оператор
        //когда имена свойст компонента совпадают с именем свойст объекта label/label
        //{...item}взять каждое свойстов из объекта item и передать его в TodoListItem
        const {id, ...itemProps} = item;//деструк туризация,чтобы в TodoListItem передать только label и important
        return (
            //уникальный ключ чтобы убрать ошибку в console
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};

export default TodoList;