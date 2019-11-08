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
            {label: 'Drink coffee', done: false, important: false, id: 1},
            {label: 'Go to the gum', done: false, important: true, id: 2},
            {label: 'Have a breakfast ', done: false, important: false, id: 3}
        ],
        phrase: '',
        filter: 'all'//active, done, all
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

    toggleDone = (id) => {//id-потому что мы можем определить какой элемент отмечен,удален и т.д. по его id
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);

            const oldItem = todoDate[idx];
            const newItem = {...oldItem, done: !oldItem.done};


            const newArray = [
                ...todoDate.slice(0, idx),
                newItem,
                ...todoDate.slice(idx + 1)
            ];

            return {
                todoDate: newArray
            }

        })
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

    //фильтр по активным,выполненным делам
    filterChange = (filter) => {
        this.setState({filter})
    };

    //фильтр по поиску
    searchChange = (phrase) => {
        this.setState({phrase});
    };

    //фильтр по поиску
    search(items, phrase) {
        if (phrase.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(phrase.toLowerCase()) > -1 //фильтр от пустой строки
        })
    };

//фильтр по активным,выполненным делам
    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done' :
                return items.filter((item) => item.done);
            default:
                return items; //если фильтр ни одно из событий выше
        }
    }

    render() {

        const {todoDate, phrase, filter} = this.state;

        const visibleItems = this.filter(
            this.search(todoDate, phrase), filter);

        //ищем все элементы у которых done==true
        //P.S. filter создает новый массив поэтому не нужно испоьзовать setState
        const doneElement = this.state.todoDate.filter((el) => el.done).length;

        //которые осталось сделать
        const todoElement = this.state.todoDate.length - doneElement;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoElement} done={doneElement}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.searchChange}/>
                    <ItemStatusFilter filter={filter}
                                      onFilterChange={this.filterChange}/>
                </div>
                <ItemAddForm onAdd={this.addItem}/>
                <TodoList todos={visibleItems} //меняем тк это часть стэйта(было-{todoDate}
                          onDeleted={this.deleteItem}
                          onToggleDone={this.toggleDone}
                          onToggleImportant={this.toggleImportant}/>

            </div>
        )
    }
}
;



