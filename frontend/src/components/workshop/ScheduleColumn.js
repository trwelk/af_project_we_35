import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleAtom from './scheduleAtom'
import ScheduledAtom from './ScheduledAtom';
import {AppConstants} from '../../redux/constants/constants'

    const useStyles = makeStyles((theme) => ({
    
    }));
function ScheduleColumn(props) {
    const globalState = useSelector((state) => state);
    const startTime = 8
    const noOfHours = 8
    const date = props.date
    const blankColumn = [];
    for(let slot = 0 ; slot < noOfHours * 2 - 1 ;  slot++){
        blankColumn.push(<ScheduleAtom key={slot} date={date} startTime={startTime + (slot * 0.5 )}/>)
    }
    const ws = globalState.workshop.workshops
    const classes = useStyles();

    const column =  ws.forEach((element,index) => {
        const itemNo = element.startTime - startTime;
        const arrayIndex = itemNo * 2
        console.log(element )

        if(date == new Date(element.date).getDate() && element.status == AppConstants.STATE_APPROVED){
            for(let start = 0 ; start < element.noOfHours * 2 ; start++){
                blankColumn[arrayIndex + start] = <ScheduledAtom data="some"/>
            }
        }
       
    })

  return (
    <div >
        {blankColumn}
    </div>
  );
}

export default ScheduleColumn;
