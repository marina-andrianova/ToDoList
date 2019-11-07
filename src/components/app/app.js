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
            {label: 'Drink coffee',done: false, important: false, id: 1},
            {label: 'Going to the gum',done: false, important: true, id: 2},
            {label: 'Have a breakfast ',done: false, important: false, id: 3}
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

    toggleDone = (id) => {
        console.log("Done", id)//id-потому что мы можем определить какой элемент отмечен,удален и т.д. по его id
    };

    toggleImportant = (id) => {
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);

            //1. изменяем объект
            const oldItem = todoDate[idx];
            const newItem = {...oldItem, important: !oldItem.important}; //приходится опять добавлять массив тк нельзя изменять состояние

            //2. конструируем новый массив(на примере deleteItem)
            const newArray = [
                ...todoDate.slice(0, idx), //копируем все элементы до измененного
                newItem,//вствляем изменненый элемент
                ...todoDate.slice(idx + 1)//все элементы после измененного
            ];

            return {
                todoDate: newArray
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
                          onDeleted={this.deleteItem}
                          onToggleDone={this.toggleDone}
                          onToggleImportant={this.toggleImportant}/>
                <ItemAddForm onAdd={this.addItem}/>
            </div>
        )
    }
};



