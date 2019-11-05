import React from 'react';
import './search-panel.css';
//работаем с полем ввода ДЕЛ

const SearchPanel = () => {
    return (
            <input type="text"
                   className="form-control form-control-lg search-input"
                   id="inputLarge"
                   placeholder="search"/>
    )
};

export default SearchPanel;