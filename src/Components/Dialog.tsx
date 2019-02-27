import * as React from 'react'
import { IBook } from '../Models/Ibook'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

interface IDialogProps {
    bookData: IBook
    openDialog: boolean
}


const DialogViewer = (props: IDialogProps) => {
    const onSave = () => {
        alert(2)
    }
    return (
        <Dialog open={props.openDialog}>

            <DialogTitle>{props.bookData.bookName}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.bookData.bookExcerpt}</DialogContentText>
                <TextField value={props.bookData.author} />
                <DialogActions>

                    <Button onClick={() => { onSave() }}>Save</Button>

                </DialogActions>
            </DialogContent>
        </Dialog>

    )

}
export default DialogViewer