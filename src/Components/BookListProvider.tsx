import * as React from 'react'
import { IBook } from '../Models/Ibook'
import DialogViewer from './Dialog'
import './booklist.css'
import Button from '@material-ui/core/Button';
interface IBookProps {
    bookData: IBook[]
}
interface IbookState {
    bookData: IBook[];
    book:IBook|null;
    showDialog: boolean
}
// const styles={card:{minWidth:275,height:150}}
class BookListProvider extends React.Component<IBookProps, IbookState>{
    public state: IbookState;
    public props: IBookProps
    constructor(props: IBookProps) {
        super(props)
        this.state = { bookData: [], showDialog: false,book:null}

    }
    public componentWillMount() {

        const data = this.props.bookData
        this.setState({ bookData: data })
    }
    public onRatingClicked = (e: any, y: any) => {
        const bookArray: IBook[] = this.state.bookData
        const bookIndex = this.state.bookData.findIndex((x => x.bookId === y))
        bookArray[bookIndex].likes += 1
        this.setState({ bookData: bookArray })

    };
    public showDialogBox = (books: IBook) => {
        this.setState({ showDialog: true,book:books })
    
      //  return ()
    }
    public render() {
        const cards = this.state.bookData.map((x) =>
            <div className="card">
                <img src={x.bookAvatar} />
                <div className="card-content">
                    <span>{x.author}</span>
                    <p>{x.bookName}</p>
                    <span onClick={(e) => this.onRatingClicked(e, x.bookId)}>{x.likes}</span>
                    <Button onClick={()=>{this.showDialogBox(x)}}>Open</Button>
                </div>
            </div>
        )
        return (<React.Fragment>
         {this.state.book && this.state.showDialog && <DialogViewer bookData={this.state.book} openDialog={true}></DialogViewer>}
            <div className="wrapper">{cards}</div>

        </React.Fragment>)
    }
}

export default BookListProvider