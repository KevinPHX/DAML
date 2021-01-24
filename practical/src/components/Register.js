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
    },
  },
}));
function Register() {
  const classes = useStyles();

  const [body, setBody] = useState({
    username: "",
    password: ""
  });
  function changeBodyInfo(e) {
     setBody({...body, [e.target.name]:e.target.value})
     console.log(body)
  }
  function RegisterSubmit() {
    console.log(body)
    axios.post('http://localhost:8080/users/register', body, {headers: {'Content-Type': 'application/json'}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return(
    <div className="Register">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Username" type="text" name = "username" defaultValue={body.username} onChange = {changeBodyInfo}/><br></br>
      <TextField label="Password" type="password" name = "password" defaultValue={body.password} onChange = {changeBodyInfo}/>
   </form>
       <Button className="submit" onClick = {RegisterSubmit}><strong>Register</strong></Button>
    </div>
  )
}

export default Register;
