import React, { Component } from 'react';
import BookResults from './BookResults';

const createURL = (search, printType, bookType) => {
  const address = "https://www.googleapis.com/books/v1/volumes?";
  const url = `${address}q=${search}&printType=${printType}&filter=${bookType}`;
  return url;
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search: '',
      printType: null,
      bookType: null,
    }
  }

  handleSearch = () => {
    const fullURL = createURL(
      this.state.search,
      this.state.printType,
      this.state.bookType
    )

    const options = {
      method: 'GET',
      apiKey: 'AIzaSyAkNgI_6tkuGUIhnKfclebH26rW1lQuwmM',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(fullURL, options)
      .then(response => response.json())
      .then(data => {
        // this.setState({
        //   items: data.items
        // })
        console.log(data)
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleSearch();
  }

  handleTextChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleBookTypeFilter = (filter) => {
    this.setState({
      bookType: filter
    })
  }

  handlePrintTypeFilter = (filter) => {
    this.setState({
      printType: filter
    })
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter Search Term"
            onChange={this.handleTextChange}
          />
          <button type="submit" onSubmit={this.handleSubmit}>Search</button>
          <label htmlFor="Print Type">Print Type:</label>
          <select onChange={e => this.handlePrintTypeFilter(e.target.value)}>
            <option>All</option>
            <option>Books</option>
            <option>Magazines</option>
          </select>
          <label htmlFor="Book Type">Book Type:</label>
          <select onChange={e => this.handleBookTypeFilter(e.target.value)} >
            <option value="ebooks">Ebooks</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="full">Full</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="partial">Partial</option>
          </select>
        </form>
        <BookResults results={this.state.items} />
      </div>
    )
  }
}

export default SearchForm;