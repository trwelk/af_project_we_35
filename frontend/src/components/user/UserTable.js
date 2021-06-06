import React from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        width: "84%",
        margin: "auto",
        marginTop: "33px"
    }
  }));

function UserTable() {
    const { useState } = React;
    const classes = useStyles();

    const [columns, setColumns] = useState([
        { title: 'Username', field: 'username' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone', type: 'numeric' },
        { title: 'Institution', field: 'Institution' },
        { title: 'usertype', field: 'Usertype', lookup: { 'editor': 'editor', 'conductor': 'conductor', 'guest': 'guest' } }
    ]);

    const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);

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
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                }
              }}
        />
        </div>  
    )
}

export default UserTable