import React, { useEffect } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table'
import { useDispatch, useSelector } from 'react-redux'


import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchNews, updateNews, deleteNews, createNews } from '../../redux/actions/news.action'
import AdminNavbar from '../views/AdminNavBar';

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
  outerDiv: {
    display: "flex",
    justifyContent: "space-around"
  },
  margin: {
    margin: theme.spacing(1),
  },
  buttonCover: {
    height: "45px",
    border: "1px black solid"
  }
}));

//-----------------------------------ui elements------------------------------------------------------------------------
function NewsTable(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical, horizontal, open, error } = state;
  const classes = useStyles();
  useEffect(() => {
    fetchNews(dispatch);
  }, [])
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  console.log(globalState)
  const news = globalState.news.news
  const data = news ? (news.map(info => ({ ...info }))) : (null)

  if (news) {
    return (
      <div>
        <AdminNavbar />
        <div style={{ padding: "20px", marginTop: "100px" }}>

          <MaterialTable style={{ padding: "0px", boxShadow: "0 0 2px 2px black" }}
            title={"News"}
            columns={[
              { title: 'Title', field: 'name' },
              { title: 'Description', field: 'description' },
              { title: 'Image Link', field: 'image', },
              { title: 'Date', field: 'date' },
              { title: 'ID', field: 'id' },
            ]}
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
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    /* setData([...data, newData]); */
                    createNews(newData, dispatch)
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {

                  if (error != null) {
                    reject();
                    setState({ ...state, open: true, error: error });
                  }
                  else {
                    setTimeout(() => {
                      updateNews(dispatch, newData)
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
                    deleteNews(dispatch, oldData.id)
                    resolve()
                  }, 1000)
                }),
            }}

          />
        </div>
      </div>
    )
  }
  else
    return <div>
      <CircularProgress style={{ marginTop: "200px" }} />
    </div>
}

export default NewsTable
