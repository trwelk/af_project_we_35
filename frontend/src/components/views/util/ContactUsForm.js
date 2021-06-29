import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import { fetchWorkshopTags } from '../../redux/actions/WorkshopTag.action';
// import { createWorkshop } from '../../redux/actions/Wokshop.action';
import Paper, { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formCover: {
        width: "50%",
        margin: 'auto'
    },

    field: {
        marginTop: "45px"
    },
}));


export default function ContactUsForm() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({ message: "", email: "", subject: "" });
    const [selectedTags, setSelectedTags] = React.useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    const globalState = useSelector((state) => state);


  

    const handleClick = () => {
        createWorkshop({ ...state, tags: selectedTags }, dispatch,);
        axios.post(AppConstants.REST_URL_HOST + keynoteURL,keynote)
        .then(response => {
            const id = response;
            
        })

    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }
    const handleTagChange = (event) => {
        setSelectedTags(event.target.value);
    };

    return (
        <div className={classes.formCover}>

            <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email"
                type="text"
                fullWidth
                value={state.email}
                onChange={handleChange}
                className={classes.field}
            />
            <TextField
                autoFocus
                margin="dense"
                name="subject"
                label="Subject"
                type="text"
                fullWidth
                value={state.subject}
                onChange={handleChange}
                className={classes.field}
            />
            <TextField
                id="outlined-multiline-static"
                label="Message"
                name="message"
                fullWidth
                multiline
                value={state.message}
                onChange={handleChange}
                className={classes.field}
                rows={4}
                variant="outlined"
            />
            <br />
            <br />
            <br />
            <Button onClick={handleClick} variant="contained" color="secondary">
                Submit
            </Button>
        </div>
    );
}
