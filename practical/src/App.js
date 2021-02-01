import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GuardedRoute from './components/Guard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const [isLoggedIn, setStatus] = useState(localStorage.getItem("isLoggedIn") == "true");
  console.log(isLoggedIn)
  const classes = useStyles();
  function logout() {
    localStorage.setItem("isLoggedIn", "false")
  }
  return (
    <div className="App">
      <Router>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" href="/">DAMBLR: The Official DAML Blog</Button>
          </Typography>
          {isLoggedIn ? <Button color="inherit" href="/" onClick={logout}>Logout</Button>:<Button color="inherit" href="/login">Login</Button>}

        </Toolbar>
      </AppBar>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <GuardedRoute path="/dashboard" exact component={Dashboard} auth={isLoggedIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
