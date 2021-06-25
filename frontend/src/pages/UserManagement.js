import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import UserTable from '../components/user/UserTable'
import ScheduleColumn from '../components/workshop/ScheduleColumn';
import { fetchWorkshops } from '../redux/actions/Wokshop.action'
import { makeStyles } from '@material-ui/core/styles';
import Heading1 from '../components/views/util/Heading1';


const useStyles = makeStyles((theme) => ({
  timeDivCover: {
    width: "10%",
    background:"#1798ff2b"
  },
  timeDiv: {
    height: "101px",
    borderTop: "1px solid #1798ff"

  },
  timeDivHalf: {
    height: "101px",
    borderTop: "1px solid #d0eaffa6"
  },
  timeCover: {
    textAlign: "right",
    marginRight: "10px"
  }
}));


function UserManagement() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    fetchWorkshops(dispatch);
  }, [])

  const daysArr = [17, 18, 19,20]
  const timeColumn = [];

  for (let i = 0; i < 16; i++) {
    if (i % 2 == 0)
      timeColumn.push(<div className={classes.timeDiv}>
        <div className={classes.timeCover}>
          {8 + (i * 0.5)}.00
        </div>
      </div>)
    else
      timeColumn.push(<div className={classes.timeDivHalf}>
        <div className={classes.timeCover}>
          {8 + (i * 0.5) - 0.2}0
      </div>
      </div>)

  }
  const cols = daysArr.map((item, index) => {
    return (
      <div style={{ width: "30%" }}>
        <ScheduleColumn date={item} />
      </div>
    )
  })
  return (
    <div>
      <Heading1 data={{heading:"Workshop Details"}}/>
      <div style={{ display: "flex" }}>
        <div className={classes.timeDivCover}>
          {timeColumn}
        </div>
        {cols}
      </div>
    </div>
  );
}

export default UserManagement;
