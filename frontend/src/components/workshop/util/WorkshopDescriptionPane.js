import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import {updateWorkshop} from '../../../redux/actions/Wokshop.action'

const WorkshopDescriptionPane = (props) => {

    const [descriptionChanged,setDescriptionChanged] = React.useState(false)
    const [desc,setDesc] = React.useState('null')
    const {workshop,description} = props
    const dispatch = useDispatch();

    const handleChangeOfDescription = (event) => {
          setDescriptionChanged(true)
          setDesc(event.target.value)
    }
    const handleDescriptionSubmit = (event,rowData) => {
        updateWorkshop(dispatch,{...workshop,description:desc});
    }
    return(
            <div>  
              <FormControl fullWidth>
                <TextField  id="outlined-basic" defaultValue={description} multiline  label="Description" variant="outlined" onChange={handleChangeOfDescription}/>
              </FormControl>
              <IconButton color="primary" aria-label="Description" disabled={descriptionChanged != true}  onClick={handleDescriptionSubmit}>
                <DoneIcon />
              </IconButton>
            </div>
    )
}


  export default WorkshopDescriptionPane