import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import UserTable from '../components/user/UserTable'
import ScheduleColumn from '../components/workshop/ScheduleColumn';
import { fetchWorkshops } from '../redux/actions/Wokshop.action'
import { makeStyles } from '@material-ui/core/styles';
import Heading1 from '../components/views/util/Heading1';
import { Paper } from '@material-ui/core';
import AdminNavbar from '../components/views/AdminNavBar';
import { AppConstants } from '../redux/constants/constants';


const useStyles = makeStyles((theme) => ({
  timeDivCover: {
    width: "10%",
    background: "#1798ff2b"
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
  },
  headCell: {
    width: "30%",
    background: "#fff5f8",
    height: "60px"
  },
  headCellLeft: {
    width: "10%",
    background: "#fff5f8",
    height: "60px"
  },
  headDay: {
    fontSize: "20px",
    fontFamily: "monospace",
    fontWeight: "300",
    lineHeight: 1.334,
    textAlign: 'center',
  },
  paperCoverWorkshop: {
    width: "90%",
    margin: 'auto'
  }
}));


function WorkshopManagement() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = React.useState({ name: "", description: "", month: "",year:"",dates:[] });

  useEffect(() => {
    fetchWorkshops(dispatch);
    axios.get(AppConstants.REST_URL_HOST + '/conference')
    .then(response => {
      console.log(response)

        setState(response.data[0])

    })
    .catch(error => {
        console.log(error)
    }) 
  }, [])

  const daysArr = state ? state.dates : [14,15]
  console.log(state)
  const timeColumn = [];
  const headRow = []

  for (let i = 0; i < daysArr.length; i++) {
    headRow.push(<div className={classes.headCell}>
      <h3 className={classes.headDay}>
        {daysArr[i]}
      </h3>
    </div>)
  }
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
      <AdminNavbar/>
      <div style={{ padding: "20px",marginTop:"100px" }}>
      <Heading1 data={{ heading: "Workshop Details" }} />
      <Paper className={classes.paperCoverWorkshop} elevation={3}>
        <div style={{ display: "flex" }}>
          <div className={classes.headCellLeft}></div>
          {headRow}
        </div>
        <div style={{ display: "flex" }}>
          <div className={classes.timeDivCover}>
            {timeColumn}
          </div>
          {cols}
        </div>
      </Paper>
      </div>
    </div>

  );
}

export default WorkshopManagement;
