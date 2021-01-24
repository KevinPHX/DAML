import React, {useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      minWidth: 300
    },
  },
}));
function Add({add}) {
  const classes = useStyles();

  const [body, setBody] = useState({
    author: "",
    date_posted: "",
    title:"",
    content:"",
    topic: ""
  });
  function changeBodyInfo(e) {
     setBody({...body, [e.target.name]:e.target.value})
     console.log(body)
     console.log(e)

  }
  function onSubmit() {
    add(body)
  }
  return(
    <div className="Add">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Your name" type="text" name = "author" defaultValue={body.author} onChange = {changeBodyInfo}/><br></br>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue={body.date_posted}
        name="date_posted"
        inputFormat="MM-dd-YYYY"
        onChange = {changeBodyInfo}
        InputLabelProps={{
          shrink: true,
        }}
      /><br/>
      <TextField label="Topic" type="text" name = "topic" defaultValue={body.topic} onChange = {changeBodyInfo}/><br></br>

      <TextField label="Title" type="text" name = "title" defaultValue={body.title} onChange = {changeBodyInfo}/><br></br>
      <TextField label="Content" type="text" name = "content" defaultValue={body.content} onChange = {changeBodyInfo} multiline/>
   </form>
       <Button className="submit" onClick = {onSubmit}><strong>Post</strong></Button>
    </div>
  )
}

export default Add;
