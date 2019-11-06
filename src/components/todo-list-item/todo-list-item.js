import React, { Component } from 'react';
import './todo-list-item.css';
//работаем с элементами массива объекта ДЕЛА


export default class TodoListItem extends Component {

    // constructor() { //используем конструктор только чтобы объявить внутри него функцию
    //     super();
    //     this.state = {//state только объект,чтобы я могла передать свойство состояния
    //         done: false
    //     };
    //
    //     this.onLabelClick = () => {//используем функции стрелки чтобы сохранить this(иначе получим работу с прототипом)
    //         alert(`done: ${this.props.label}`)//this внутри функции стрелки сохраняет правильное значение
    //     }
    // }
// ИЗБАВЛЯЮСЬ от конструктора и синтаксис теперь выглядит так:
    state = {
        done: false,
        important: false
    };
    onLabelClick = () => {
        this.setState(({done}) => { //state изменяется ТОЛЬКО через setState
            return {
                done: !done//тоже что и в коде ниже только с деструктуризацией из state
            }
        })
    };
    onMarkImportant = () => {
        this.setState((state) => { //используем такую конструкцию когда надо совершить отмену (перезапись) состояния при повторном нажатии на кнопку
            return {
                important: !state.important //меняем на протиповоложное состояние из state
            }
        })
    };


    render() {
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={this.onLabelClick}>
            {label}
        </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn btn-danger btn-sm float-right"
              onClick={this.props.onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
        </span>
    )
}
}


