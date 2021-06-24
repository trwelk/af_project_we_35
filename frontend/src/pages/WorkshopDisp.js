import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ScheduleColumn from '../components/workshop/ScheduleColumn';
import { fetchWorkshops } from '../redux/actions/Wokshop.action'
import WorkshopCard from '../components/workshop/WorkshopCard'
import { makeStyles } from '@material-ui/core/styles';
import CategoryChips from '../components/workshop/CategoryChips';
import ImageListView from '../components/views/ImageListView'
const useStyles = makeStyles((theme) => ({
    listContainer: {
        display: "flex",
        flexDirection: "column"
    }
}));

function WorkshopDisp() {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const classes = useStyles();

    useEffect(() => {
        fetchWorkshops(dispatch);
    }, [])

    const workshops = globalState.workshop.workshops
    const workShopUiList = workshops.map((workshop, index) => {
        return (
            <WorkshopCard index={index} workshop={workshop} />
        )

    })

    return (
        <div>
            <CategoryChips />
            <div className={classes.listContainer} >
                {workShopUiList}
            </div>
            <ImageListView/>
        </div>
    );
}

export default WorkshopDisp;
