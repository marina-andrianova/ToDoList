import React, { Component } from 'react';
import './todo-list-item.css';
//работаем с элементами массива объекта ДЕЛА


export default class TodoListItem extends Component {

    constructor() { //используем конструктор только чтобы объявить внутри него функцию
        super();

        this.onLabelClick = () => {//используем функции стрелки чтобы сохранить this(иначе получим работу с прототипом)
            alert(`done: ${this.props.label}`)//this внутри функции стрелки сохраняет правильное значение
        }
    }

    render() {
        const {label} = this.props;

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                onClick={ this.onLabelClick }>
            {label}
        </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn btn-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
        </span>
    )
}
}


