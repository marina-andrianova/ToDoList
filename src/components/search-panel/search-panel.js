import React, {Component} from 'react';
import './search-panel.css';
//работаем с полем ввода ДЕЛ

export default class SearchPanel extends Component {

    state={
        phrase: ''
    };

    onSearchChange = (e)=> {
        const phrase = e.target.value;
        this.setState({phrase});
        this.props.onSearchChange(phrase)
    };

    render() {
        return (
            <input type="text"
                   className="form-control form-control-lg search-input"
                   placeholder="search"
            value={this.state.phrase}
            onChange ={this.onSearchChange}/>
        )
    };
}