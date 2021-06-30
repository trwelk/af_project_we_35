import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { fetchWorkshopTags } from '../../redux/actions/WorkshopTag.action';
import { createWorkshop , validateWorkshopObj} from '../../redux/actions/Wokshop.action';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    dialog: {
        height: "600px",
    },
    field: {
        marginTop: "45px"
    },
    formControl: {
        width: "-webkit-fill-available"
    },
    buttonIcon: {
        backgroundColor: "rgb(35, 47, 62)"
    }
}));


export default function AddWorkshopForm() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ name: "", title: "", description: "", conductor: "",email:"" ,link:""});
    const [openFeedback, setOpenFeedback] = React.useState({   openf: false,
        vertical: 'bottom',
        horizontal: 'right',});
    const {vertical,horizontal,openf} = openFeedback
    const [error, setError] = React.useState("");
    const [selectedTags, setSelectedTags] = React.useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    const globalState = useSelector((state) => state);
    const tags = globalState.workshopTag.workshopTags
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 48 * 4.5 + 5,
                width: 250,
            },
        },
    };

    useEffect(() => {
        fetchWorkshopTags(dispatch)
    }, [])
    // Event handlers
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        let err = validateWorkshopObj(state)
        setError(err)
        if(error == null){
            createWorkshop({ ...state, tags: selectedTags }, dispatch,);
            setOpen(false)
        }

    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }
    const handleTagChange = (event) => {
        setSelectedTags(event.target.value);
    };


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.buttonIcon}
                startIcon={<ShoppingCartIcon />}
                onClick={handleClickOpen}
            >
                Add workshop
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Workshops</DialogTitle>
                <div style={{marginLeft:"20px",color:"red"}}>{error ? error : ""}</div>
                <DialogContent className={classes.dialog}>
                    <DialogContentText>
                        Add Product Details
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        name="link"
                        label="Document Link"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="conductor"
                        label="conductor"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                        className={classes.field}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={selectedTags}
                            fullWidth
                            onChange={handleTagChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {tags.map((tag) => (
                                <MenuItem key={tag.id} value={tag.id} >
                                    {tag.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
