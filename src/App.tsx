import * as React from 'react';
import './App.css';
import { IBook } from './Models/Ibook'
import BookListProvider from './Components/BookListProvider'
class App extends React.Component {
  public render() {
    const books: IBook[] = require('./Data/Book.json').books
    // tslint:disable-next-line:no-console
    // console.log("hi"+books.author)
    return (
      <div className="App">
        <header className="App-header">Books</header>
        <BookListProvider bookData={books} />

      </div>
    );
  }
}

export default App;
