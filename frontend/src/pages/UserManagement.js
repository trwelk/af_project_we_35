import React, { useEffect } from 'react';

import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

import UserTable from '../components/user/UserTable'
import ScheduleColumn from '../components/workshop/ScheduleColumn';
import {fetchWorkshops} from '../redux/actions/Wokshop.action'

function UserManagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWorkshops(dispatch);
  },[])

  const daysArr = [17,18]
  const cols = daysArr.map((item,index) => {
    return(
      <div style={{width:"30%"}}>
        <ScheduleColumn date={item}/>
      </div>
    )
  })
  return (
    <div style={{display: "flex" }}>
        {cols}
    </div>
  );
}

export default UserManagement;
