import { DialogContent, Dialog, Button, DialogActions } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as React from 'react';
import { IBook } from '../Models/Ibook'
import './booklist.css'
import TextField from '@material-ui/core/TextField';
interface IUploaderState {
    book: IBook;
}
interface IUploaderProps {
    showUploader: boolean;
    onDialogUploaderClose: (x: any) => void
}

class DialogUploader extends React.Component<IUploaderProps, IUploaderState>{

    constructor(props: any) {
        super(props);
        this.state = { book: { bookAvatar: "", bookExcerpt: "", author: "", bookId: 0, bookName: "", likes: 0, ratings: 0, review: [] } }
    }

    public getFileFromInput = (file: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => { resolve(reader.result); };
            reader.onerror = reject;
        });
    }
    public handleChange = (event: any) => {
        const val = event.target.name;
        const b: IBook = this.state.book;
        b[val] = event.target.value;
        this.setState({ book: b })
    }

    public manageUploadedFile = (binary: string) => {
        const b: IBook = this.state.book;
        b.bookAvatar = binary.toString();
        this.setState({ book: b })
    }

    public handleFile = (event: any) => {
        event.persist();
        Array.from(event.target.files).forEach(file => {
            this.getFileFromInput(file)
                .then((binary: any) => {
                    this.manageUploadedFile(binary);
                }).catch((reason: any) => {
                    console.log(`Error during upload ${reason}`);
                    event.target.value = '';
                });
        });
    }
    public onSave = () => {
        this.props.onDialogUploaderClose(this.state.book);
    }
    public render() {
        return (<Dialog open={this.props.showUploader} disableEscapeKeyDown>
            <div className="layout-row">
            <div>
                <img id="imgid" className="image_render" src={this.state.book.bookAvatar} />
                </div>
                <div>
                    <DialogContent>
                        <TextField label="Book Id" type="text" value={this.state.book.bookId} name="bookId" onChange={this.handleChange} />
                        <TextField type="text" label="Book name" value={this.state.book.bookName} name="bookName" onChange={this.handleChange} />

                    </DialogContent>
                    <DialogActions>
                        <input
                            accept="image/*,.jpg,.png,.jpeg"
                            style={{ display: 'none' }}
                            id="file"
                            type="file"
                            onChange={this.handleFile} />

                        <label htmlFor="file">
                            <Button
                                variant="contained"
                                color="default"
                                component="span"
                                style={{ margin: 8 }}
                            >
                                <CloudUploadIcon />
                                Upload
                    </Button>
                        </label>
                        <Button style={{ color: 'red' }} onClick={() => { this.onSave() }}>Save</Button>

                    </DialogActions>
                </div>
            </div>



        </Dialog>)
    }
}
export default DialogUploader