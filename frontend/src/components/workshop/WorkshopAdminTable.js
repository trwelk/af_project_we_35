import React, { useEffect } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table'
import { useDispatch, useSelector } from 'react-redux'


import { makeStyles } from '@material-ui/core/styles';
import WorkshopDescriptionPane from './util/WorkshopDescriptionPane';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import { Redirect } from "react-router-dom";
import AddWorkshopForm from './AddWorkshopForm';
import {fetchWorkshops,updateWorkshop,deleteWorkshop} from '../../redux/actions/Wokshop.action'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    outerDiv:{
        display: "flex",
    justifyContent: "space-around"
    }, 
    margin: {
        margin: theme.spacing(1),
      },
      buttonCover:{
          height:"45px",
          border:"1px black solid"
      }
  }));

//-----------------------------------ui elements------------------------------------------------------------------------
function WorkshopAdminTable(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical, horizontal, open ,error} = state;
  const classes = useStyles();
  useEffect(() => {
    fetchWorkshops(dispatch);
}, [])
const dispatch = useDispatch();
const globalState = useSelector((state) => state);
const workshops = globalState.workshop.workshops

  const addButton =  <AddWorkshopForm/>



  const data = workshops ? (workshops.map(workshop => ({...workshop}))) : (null)
      
      if(workshops){
    return (
      <div style={{padding: "20px"}}>
          <div className={classes.buttonCover}>
              <AddWorkshopForm/>
          </div>
        <MaterialTable style={{padding:"0px",boxShadow: "0 0 2px 2px black"}}
        title={addButton}
          columns={[
            { title: 'Title', field: 'title' },
            { title: 'conductor', field: 'conductor'},
            { title: 'Number of Hours', field: 'noOfHours',type:'numeric'},
            { title: 'State', field: 'state',
                lookup: { requested: 'requested', approved: 'approved',declined:'declined'}},
            { title: 'ID', field: 'id'},
          ]}
          options={{
          pageSize:10,
        exportButton: true,
                filtering: true,
        headerStyle: {
          backgroundColor: 'rgb(35 47 62) ',
          color: '#FFF',
          borderBottom: '1px solid #333',
        width: '100px',
    /* height: 100px; */
        boxShadow: "0 10px 5px -2px #888"
        }
      }}
      components={{
        Toolbar: props => (
          <div>
          </div>
        ),
      }}
          data={data}
          detailPanel={[
            {
              icon:'D',
              tooltip: 'Show Description',
              render: rowData => {
                return (
                  <div> 
                      <WorkshopDescriptionPane workshop={rowData} description={rowData.description}/>
                  </div>

                    
                )
              },
            },
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                //const error = validateData___(newData);
                  if (error != null){
                    reject();
                    setState({ ...state, open: true,error:error });
                  }
                  else{
                    setTimeout(() => {
                        updateWorkshop(dispatch,newData)
                        resolve();
                    }, 1000)
                  }
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  //setData([...dataDelete]);
                  deleteWorkshop(dispatch,oldData.id)
                  resolve()
                }, 1000)
              }),
          }}

        />
      </div>
    )
  }
  else
  return <div>     
           <CircularProgress style={{marginTop:"200px"}}/>
          </div>
}

  export default WorkshopAdminTable
  