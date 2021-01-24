import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import Add from './Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Dashboard.css'

function Dashboard(){
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getBlogs()
  }, []);
  const getBlogs = async () => {
    const { data } = await axios.get("https://my-json-server.typicode.com/nfried16/swe-practice/posts");
    setPosts(data)
    return data;
  }

  function add(data) {
    // posts.push("here")
    // setPosts(posts)
    console.log(data)
    var arr = [...posts]
    arr.push(data)
    setPosts(arr)
    setOpen(false);
  }
  function remove(i){
    var arr = [...posts]
    arr.splice(i, 1)
    setPosts(arr)
  }
  return(
    <div className="Dashboard">
    <br/><br/>
    <table>
      <tr>
      <td className="title-line"><h1>Check out your feed:</h1></td>
        <td>
        <Button className="add" variant="outlined" color="primary" onClick={handleClickOpen}>
          Write a post
        </Button>
        </td>
      </tr>

    </table>
    <br/>
    {posts.map((blog, i) => <Post blog={blog} key={i} onChildClick={() => remove(i)}/>)}


    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Write a post!"}</DialogTitle>
        <DialogContent>
          <Add add = {add}/>
          <br/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard;
