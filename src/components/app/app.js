import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

export default class App extends Component {
// прредставим каждый элемент из списка дел todo-list-item в отдельный объект
// заносим это все в App чтобы если вдруг данные получим с сервера, перересуем только App
    maxId = 4;

    state = {
        todoDate: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Going to the gum', important: true, id: 2},
            {label: 'Have a breakfast ', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoDate}) => {

            const idx = todoDate.findIndex((el) => el.id === id);//ищем элемент у которого id точно такой же, как тот id который мы получили

            const newArray = [//создаем новый массив после удаление элемента тк старый массив изменять нельзя
                ...todoDate.slice(0, idx),//изначальный массив дробим от первого элемента до удаленного(который мы выбрали)
                ...todoDate.slice(idx + 1)//от удаленного и до конца
            ];

            return {
                todoDate: newArray
            }
        })
    };

    addItem = (text) => {
        //генерация нового id
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        //добавляем элемент в массив
        this.setState(({todoDate}) => {
            const newArr = [ // создаем массив
                ...todoDate, //перебираем все элемнты со старого массива
                newItem      //дабавляем новый элемент
            ];

            return {
                todoDate: newArr
            }
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoDate} //меняем тк это часть стэйта(было-{todoDate}
                          onDeleted={this.deleteItem}/>
                <ItemAddForm onAdd={this.addItem}/>
            </div>
        )
    }
};



