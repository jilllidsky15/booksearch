import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import BookResults from './components/BookResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: 'dog',
      printType: 'All',
      bookType: 'Ebooks',
    }
  }

  componentDidMount() {
    const createURL = (search, printType, bookType) => {
      const address = "https://www.googleapis.com/books/v1/volumes?";
      const url = `${address}q=${search}&printType=${printType}&filter=${bookType}`;
      return url;
    }

    const fullURL = createURL(
      this.state.search,
      this.state.printType,
      this.state.bookType
    )

    fetch(fullURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm />
          <BookResults />
        </main>
      </div>
    );
  }
}

export default App;
