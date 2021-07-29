import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles({
  loginButton: {
    marginLeft: 'auto',
  },
});

function WishlistAppBar(props) {
  const classes = useStyles();

  return <AppBar position="sticky">
    <Toolbar>
      <IconButton edge="start">
        <MenuIcon />
      </IconButton>
      <Button variant="contained" className={classes.loginButton} onClick={props.onLoginButtonClick}>Log in</Button>
    </Toolbar>
  </AppBar>;
}

export default WishlistAppBar;
