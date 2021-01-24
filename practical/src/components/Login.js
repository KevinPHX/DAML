import React, {useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login() {
  const history = useHistory();

  const classes = useStyles();
  const [body, setBody] = useState({
    username: "",
    password: ""
  });
  function changeBodyInfo(e) {
    console.log(e.target.name)

     setBody({...body, [e.target.name]:e.target.value})
     console.log(body)
  }
  function loginSubmit() {
    console.log(body)
    axios.post('http://localhost:8080/users/authenticate', body, {headers: {'Content-Type': 'application/json'}})
    .then(function (response) {
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("isLoggedIn", "true")
        // history.replace("/dashboard");
        window.location.href = "/dashboard";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return(
    <div className="Login">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Username" type="text" name = "username" defaultValue={body.username} onChange = {changeBodyInfo}/><br></br>
      <TextField label="Password" type="password" name = "password" defaultValue={body.password} onChange = {changeBodyInfo}/>
   </form>
   <Button onClick = {loginSubmit}><strong>Log In</strong></Button>
   <a href="/register">Register</a>
    </div>
  )
}

export default Login;
