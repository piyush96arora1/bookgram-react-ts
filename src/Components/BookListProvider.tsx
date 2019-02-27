import * as React from 'react'
import { IBook } from '../Models/Ibook'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
interface IBookProps {
    bookData: IBook[]
}
interface IbookState {
    bookData: IBook[]
}
const styles={card:{minWidth:275,height:150}}
class BookListProvider extends React.Component<IBookProps, IbookState>{
    public state: IbookState;
    public props: IBookProps
    constructor(props: IBookProps) {
        super(props)
        this.state = { bookData: [] }

    }
    public componentWillMount() {

        const data = this.props.bookData
        this.setState({ bookData: data })
    }
    public render() {
        const cards=this.state.bookData.forEach((x)=>{
             return <Card>
            <CardActionArea>
              <CardMedia
                
                component="img"
                image={x.bookAvatar}
                title={x.bookName}
              />
            </CardActionArea>
            <CardContent>
                {x.bookExcerpt}
            </CardContent>
          </Card>

        })
        return (<div> {cards}</div>)
    }
}

export default BookListProvider