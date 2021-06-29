import React, { useEffect } from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import { fetchSuperUsers, updateSuperUser, createSuperUser, deleteSuperUser } from '../../redux/actions/SuperUser.action'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        width: "84%",
        margin: "auto",
        marginTop: "33px",
    }
}));

function UserTable() {
    const { useState } = React;
    const classes = useStyles();
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state);

    useEffect(() => {
        fetchSuperUsers(dispatch);
    }, [])

    //Defining columns for table
    const [columns, setColumns] = useState([
        { title: 'Username', field: 'username' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'contact', type: 'numeric' },
        { title: 'User Type', field: 'type', lookup: { 'admin': 'Admin','editor': 'Editor', 'reviewer': 'Reviewer'} }
    ]);

    const data = globalState.superuser.superUsers;

    return (
        <div className={classes.tableContainer}>
        <MaterialTable
            title="User Management"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            createSuperUser(dispatch, newData);
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            // const dataUpdate = [...data];
                            // const index = oldData.tableData.id;
                            // dataUpdate[index] = newData;
                            updateSuperUser(dispatch,newData);
                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            deleteSuperUser(dispatch,oldData);
                            resolve()
                        }, 1000)
                    }),
            }}
            options={{
                headerStyle: {
                  backgroundColor: '#6c7a89',
                  color: '#FFF'
                },
                rowStyle: {
                    backgroundColor: '#EEE',
                    color: '#000' 
                }
              }}
        />
        </div>  
    )
}

export default UserTable