import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Filter />
      </div>
    );
  }
}

export default SearchForm;