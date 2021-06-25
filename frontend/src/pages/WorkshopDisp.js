import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ScheduleColumn from '../components/workshop/ScheduleColumn';
import { fetchWorkshops } from '../redux/actions/Wokshop.action'
import WorkshopCard from '../components/workshop/WorkshopCard'
import { makeStyles } from '@material-ui/core/styles';
import CategoryChips from '../components/workshop/CategoryChips';
import ImageCarousel from '../components/user/ImageCarousel';
import ImageTileDisplay from '../components/views/util/ImageTileDisplay';
import KeynoteCard from '../components/keynote/KeynoteCard';
import KeynoteList from '../components/keynote/KeynoteList';
import NewsList from '../components/news/NewsList';

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


    const setCategory = (category) => {
        fetchWorkshopForProducts(dispatch,category);
    }

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
            <ImageTileDisplay/>
            <KeynoteList/>
            <NewsList/>

        </div>
    );
}

export default WorkshopDisp;
