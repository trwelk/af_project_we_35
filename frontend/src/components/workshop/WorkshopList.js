import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkshops } from '../../redux/actions/Wokshop.action'
import WorkshopCard from './WorkshopCard';

function WorkshopList() {

    useEffect(() => {
        fetchWorkshops(dispatch);
    }, [])
    //*********************************************CONSTANTS************************************************************* */

    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);
    const workshops = globalState.workshop.workshops
    const workShopUiList = workshops.map((workshop, index) => {
        return (
            <WorkshopCard index={index} workshop={workshop} />
        )

    })

    //*********************************************Rendering elements************************************************************* */

    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            {workShopUiList}
        </div>
    );
}

export default WorkshopList;
