import * as React from 'react';
import './App.css';
import {IBook} from './Models/Ibook'
class App extends React.Component {
  public render() {
    const books:IBook=require('./Data/Book.json')[0]
    // tslint:disable-next-line:no-console
    console.log("hi"+books.author)
    return (
      <div className="App">
        <header className="App-header"/>
        <p>hi</p>
      
      </div>
    );
  }
}

export default App;
