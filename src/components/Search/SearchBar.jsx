import React, { useState } from "react";
import {BsSearch} from 'react-icons/Bs';

import './SearchBar.css';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    return(
        <form className="search-bar">
            <input type="search"
                value={searchValue}
                placeholder="search"
                className="search__input"
                onChange={ ({ target }) => setSearchValue(target.value) }
                required
            />
            <button type="submit" className="search__button">
                <BsSearch/>
            </button>
        </form>
    )
}

export default SearchBar