import React, { useEffect, useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResearch } from '../../redux/actions/research.action';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { AppConstants } from '../../redux/constants/constants';
import { updateResearch } from '../../redux/actions/research.action'
import { IconButton } from '@material-ui/core';
import AdminNavbar from '../views/AdminNavBar';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ResearchPaperTable(props) {
    useEffect(() => {
        fetchResearch(dispatch);
    }, [])
    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();
    const researchPapers = globalState.research.researchPapers
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });
    const { vertical, horizontal, open, error } = state;
    const { useState } = React;
    const stateLookup = {
        requested: AppConstants.STATE_REQUESTED,
        approved: AppConstants.STATE_APPROVED
    }

//*********************************************Setting columns************************************************************* */

    const [columns, setColumns] = useState([
        { title: 'ID', field: 'id', editable: false },
        { title: 'Topic', field: 'paperTopic', },
        { title: 'Uploader', field: 'paperUploader' },
        { title: 'Uploader Email', field: 'email' },
        { title: 'Link', field: 'paperLink' },
        {
            title: 'Status', field: 'state',
            lookup: stateLookup
        },
    ]);




//*********************************************Event Handlers************************************************************* */

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };



    //--------------------------------------------------------UI-ELEMENTS-------------------------------------------------------------     
    const table = researchPapers ? (
        <MaterialTable style={{ padding: "0px", boxShadow: "0 0 2px 2px black" }}
            title={"Research Papers"}
            columns={columns}
            data={researchPapers}
            detailPanel={[
            {
              icon:'download',
              tooltip: 'Download',
              render: rowData => {
                return (
                  <div> 

                    <a 
                    href={rowData.paperLink} 
                    target="_blank"download>
                                              <IconButton>
                          <CloudDownloadIcon/>
                      </IconButton>download</a>
                  </div>

                    
                )
              },
            },
          ]}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        if (error != null) {
                            setState({ ...state, open: true, error: error });
                            reject();
                        }
                        else {
                            setTimeout(() => {
                                console.log(data)
                                props.insertCustomer(newData);
                                resolve();
                            }, 1000)
                        }
                    }),

                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        if (error != null) {
                            reject();
                            setState({ ...state, open: true, error: error });
                        }
                        else {
                            setTimeout(() => {
                                updateResearch(dispatch, newData)
                                resolve();
                            }, 1000)
                        }
                    }),
            }}
            options={{
                pageSize: 10,
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
                        <MTableToolbar {...props} />
                    </div>
                ),
            }}
        />
    ) : (<div><CircularProgress style={{ marginTop: "200px" }} /></div>)


    return (
        <div>
        <AdminNavbar/>
        <div style={{ padding: "20px",marginTop:"100px" }}>
            {table}
        </div>
        </div>

    )
}


export default ResearchPaperTable