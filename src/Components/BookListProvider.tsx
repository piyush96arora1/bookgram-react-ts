import * as React from 'react'
import { IBook } from '../Models/Ibook'
import DialogViewer from './Dialog'
import './booklist.css'
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete'
import DialogUploader from './DialogUploader'
import Favorite from '@material-ui/icons/Favorite'
interface IBookProps {
    bookData: IBook[]
}
interface IbookState {
    bookData: IBook[];
    book: IBook | null;
    showDialog: boolean;
    showUploader: boolean;
}
// const styles={card:{minWidth:275,height:150}}
class BookListProvider extends React.Component<IBookProps, IbookState>{
    public state: IbookState;
    public props: IBookProps
    constructor(props: IBookProps) {
        super(props)
        this.state = { bookData: [], showDialog: false, book: null, showUploader: false }

    }
    public componentDidMount() {

        const data = this.props.bookData
        this.setState({ bookData: data })
    }
    public dialogOpner = () => {
        this.setState({ showUploader: true })
    }
    public onRatingClicked = (e: any, y: any) => {
        e.preventDefault();
        const bookArray: IBook[] = this.state.bookData
        const bookIndex = this.state.bookData.findIndex((x => x.bookId === y))
        bookArray[bookIndex].likes += 1
        this.setState({ bookData: bookArray })

    };
    public onDialogUploaderClose = (book: IBook) => {
        if (book.bookId !== 0) {
            const prevState = this.state.bookData;
            prevState.push(book);
            this.setState({ bookData: prevState, showUploader: false })

        }
        else {
            this.setState({ showUploader: false })
        }
    }

    public showDialogBox = (books: IBook) => {
        this.setState({ showDialog: true, book: books })

        //  return ()
    }
    public deleteBook = (x: any) => {
        const book = this.state.bookData.filter(b => b.bookId !== x)
        this.setState({ bookData: book })
    }
    public onSave = (book: IBook) => {
        if (book != null) {
            const bookArray: IBook[] = this.state.bookData
            const bookIndex = this.state.bookData.findIndex((x => x.bookId === book.bookId))
            bookArray[bookIndex].author = book.author;
            this.setState({ bookData: bookArray, showDialog: false })
        }
        this.setState({ showDialog: false })
    }
    public render() {
        const cards = this.state.bookData.map((x) =>

            <div className="">
                <img src={x.bookAvatar} />
                <div className="card-content">
                    <span>{x.author} {x.likes}</span>
                    <p>{x.bookName}</p>
                    <div className="layout-row">
                        <Button onClick={(e) => this.onRatingClicked(e, x.bookId)}> <Favorite /> </Button>
                        <Button onClick={() => { this.showDialogBox(x) }}>Open</Button>
                        <Button onClick={() => { this.deleteBook(x.bookId) }}>  <Delete /></Button>
                    </div>
                </div>
            </div>

        )
        return (<React.Fragment>
            {this.state.book && this.state.showDialog && <DialogViewer onSave={this.onSave} bookData={this.state.book} openDialog={true}></DialogViewer>}
            <div className="wrapper layout-row layout-row layout-align-space-around-center">{cards}</div>
            <Button onClick={this.dialogOpner}>Add new Book Details</Button>
            {this.state.showUploader && <DialogUploader showUploader={true} onDialogUploaderClose={this.onDialogUploaderClose}></DialogUploader>}
        </React.Fragment>)
    }
}

export default BookListProvider