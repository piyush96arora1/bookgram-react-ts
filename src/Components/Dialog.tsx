import * as React from 'react'
import { IBook } from '../Models/Ibook'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
 import Paper from '@material-ui/core/Paper';
 import './booklist.css'

interface IDialogProps {
    bookData: IBook
    openDialog: boolean
    onSave: (x:any)=>void;
}


const DialogViewer = (props: IDialogProps) => {
    let book:IBook|null;
    const onSave = () => {
       return props.onSave(book)
    }
    const handleAuthorChange=(event:any)=>{
        // event.preventDefault();
        const author=event.target.value;
        const bookModified:IBook={...props.bookData,author}
        book=bookModified;
    }
   
    return (
        <Dialog open={props.openDialog}    disableEscapeKeyDown
         onClose={()=>{props.onSave(book)}}>

            <DialogTitle>{props.bookData.bookName}</DialogTitle>
            <DialogContent>
                <div className="layout-row layout-sm-column layout-xs-column">
                <div className="flex-60">
                    <img className="image_render1"src={props.bookData.bookAvatar}/>
                </div>
                <div className="flex-40 layout-column layout-margin layout-padding  ">
                <DialogContentText>{props.bookData.bookExcerpt}</DialogContentText>
                <TextField type="text" onChange={e=>handleAuthorChange(e)} defaultValue={props.bookData.author}  />
                {props.bookData.review.map((x)=>
                    <Paper style={{borderColor:'black',borderWidth:1,borderStyle:'dotted'}}>{x}</Paper>
                )}
                </div>
                </div>
                <DialogActions>

                    <Button onClick={() => { onSave() }}>Save</Button>

                </DialogActions>
            </DialogContent>
        </Dialog>

    )

}
export default DialogViewer