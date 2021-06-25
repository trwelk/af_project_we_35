import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import AddWorkshopForm from './AddWorkshopForm';
import { fetchWorkshopTags } from '../../redux/actions/WorkshopTag.action';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        flexDirection:"row"
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    chipContainer:{
        display:"flex",
        flexDirection:"row  ",
        width:"60%",
        justifyContent:"flex-end"
    }
}));

export default function CategoryChips(props) {
    const classes = useStyles();
    const setCategory = props.setCategory
    const [chipData, setChipData] = React.useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchWorkshopTags(dispatch);
    }, [])

    const handleClick = (chipToDelete) => () => {
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        let newChipData = [];
        chipData.forEach((item, index) => {
            let newChip = { ...item, color: "default" };
            if (item.id == chipToDelete.id) {
                newChip.color = "primary";

            }
            newChipData.push(newChip)
        })
        setChipData(newChipData)
        setCategory(chipToDelete)
    };

    return (
        <Paper component="ul" className={classes.root}>
            <div className={classes.chipContainer}>
            {chipData.map((data) => {
                return (
                    <li key={data.key}>
                        <Chip
                            label={data.id}
                            className={classes.chip}
                            color={data.color}
                            onClick={handleClick(data)}
                        />
                    </li>
                );
            })}

        </div>
        <div>
            <AddWorkshopForm/>
        </div>
        </Paper>
    );
}
