import React, { Component } from 'react';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
        <SearchForm/>
        </main>
      </div>
    );
  }
}

export default App;