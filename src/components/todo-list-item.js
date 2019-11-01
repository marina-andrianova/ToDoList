import React from 'react';
//работаем с элементами массива объекта ДЕЛА
const TodoListItem = ({label, important = false}) => {
    return (
        <span>{ label }</span>
    )
};

export default  TodoListItem;