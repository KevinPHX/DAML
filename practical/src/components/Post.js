import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Post({blog, onChildClick}){
  console.log(blog.length)
  const classes = useStyles();

  return(
    <div className="Post">

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {blog.topic}
          </Typography>
          <Typography variant="h5" component="h2">
            {blog.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            By: {blog.author} Published: {blog.date_posted}
          </Typography>
          <Typography variant="body2" component="p">
            {blog.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onChildClick}>Remove</Button>
        </CardActions>
      </Card>
      <br/>
    </div>
  )
}

export default Post;
