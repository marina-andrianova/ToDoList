import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    //каждая функция по типу onChange принимает в себя event
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value//содержит в себе текущее значение написанного из поля ввода
        })
    };

    addSubmit = (e) => {
        e.preventDefault();//обязательный метод при отправке формы(не перезагружает страницу)
        this.props.onAdd(this.state.label);
        this.setState({ //для очистки input после добавления value
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                //при клике на форму желательно добавить onSubmit а не onClick
                //onSubmit отлавливает момент когда пользователь отправляет форму
                  onSubmit={this.addSubmit}>
                <input type="text"
                       className="form-control form-control-sm"
                       placeholder="enter a new item"
                       onChange={this.onLabelChange}
                    //для очистки input после добавления value
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
}