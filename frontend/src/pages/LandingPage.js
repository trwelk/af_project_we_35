import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkshops } from '../redux/actions/Wokshop.action'
import WorkshopCard from '../components/workshop/WorkshopCard'
import { makeStyles } from '@material-ui/core/styles';
import ImageTileDisplay from '../components/views/util/ImageTileDisplay';
import KeynoteList from '../components/keynote/KeynoteList';
import NewsList from '../components/news/NewsList';
import Heading1 from '../components/views/util/Heading1';
import ParagraphWithBackground from '../components/views/util/ParagraphWithBackground';
import HeroWithContent from '../components/views/util/HeroWithContent';
import NavBar from '../components/views/util/NavBar';
import Footer from '../components/views/util/Footer';

const useStyles = makeStyles((theme) => ({
    listContainer: {
        display: "flex",
        flexDirection: "column"
    }
}));

function LandingPage() {
    const dispatch = useDispatch();
    const [keynote,setKeynote] = useState([])
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
    const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

    return (
        <div>
            <NavBar/>
        <div style={{background:"#fff5f8",}}>
            <HeroWithContent/>
            <Heading1 data={{heading:"BRAINYCONN"}}/>
            <ParagraphWithBackground text={intro}/>
            
            <ImageTileDisplay/>
            <KeynoteList/>
            <NewsList/>
            <Footer/>
        </div>
        </div>

    );
}

export default LandingPage;
