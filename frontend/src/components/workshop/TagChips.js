import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkshopTags,fetchWorkshopTagSuccess } from '../../redux/actions/WorkshopTag.action';
import { fetchWorkshopForTags, } from '../../redux/actions/Wokshop.action';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
        background: "#fff5f8",
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

export default function TagChips(props) {


    useEffect(() => {
        fetchWorkshopTags(dispatch);
    }, [])


//*********************************************CONSTANTS************************************************************* */
    const classes = useStyles();
    const setCategory = props.setCategory
    const [chipData, setChipData] = React.useState([]);
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const workshopTags = globalState.workshopTag.workshopTags
    // setChipData(workshopTags);

        //*********************************************EVENT HANDLERS************************************************************* */

    const handleClick = (chipToDelete) => () => {
        let newChipData = [];
        workshopTags.forEach((item, index) => {
            let newChip = { ...item, color: "default" };
            if (item.id == chipToDelete.id) {
                newChip.color = "primary";

            }
            newChipData.push(newChip)
        })
        dispatch(fetchWorkshopTagSuccess(newChipData))
        fetchWorkshopForTags(dispatch,chipToDelete)
    };

 //*********************************************Rendering elements************************************************************* */
    return (
        <Paper component="ul" className={classes.root}>
            <div className={classes.chipContainer}>
            {workshopTags.map((data) => {
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
        </Paper>
    );
}
