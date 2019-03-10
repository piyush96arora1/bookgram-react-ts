import * as React from 'react';
import './App.css';
import { IBook } from './Models/Ibook'
import AppBar from '@material-ui/core/AppBar';
import BookListProvider from './Components/BookListProvider'
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import { styles } from './Components/styles'
class App extends React.Component {
  public render() {
    const books: IBook[] = require('./Data/Book.json').books
    // tslint:disable-next-line:no-console
    // console.log("hi"+books.author)
    return (
      <div className="App">
        <AppBar color="primary" style={styles.root} position="relative">

          <Typography variant="h4" gutterBottom>
            Books
            </Typography>



        </AppBar>
        <BookListProvider bookData={books} />

      </div>
    );
  }
}

export default App;
