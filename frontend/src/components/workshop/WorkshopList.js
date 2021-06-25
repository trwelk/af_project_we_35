import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchWorkshops} from '../../redux/actions/Wokshop.action'
import WorkshopCard from './WorkshopCard';

function WorkshopList() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    fetchWorkshops(dispatch);
  },[])

  const workshops = globalState.workshop.workshops
  const workShopUiList = workshops.map((workshop, index) => {
      return (
          <WorkshopCard index={index} workshop={workshop} />
      )
  
  })
  
  return (
    <div style={{display: "flex" , flexDirection: 'column'}}>
        {workShopUiList}
    </div>
  );
}

export default WorkshopList;
