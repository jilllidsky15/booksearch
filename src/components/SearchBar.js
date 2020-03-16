import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <form>
                <label htmlFor="Search">Search</label>
                <input type="text" name="search" id="search" placeholder="Enter Search Term" />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;