import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase';


function WishlistAppBar(props) {
  return <AppBar position="sticky">
    <Toolbar>
      <Typography style={{ flexGrow: 1 }}>
        {auth.currentUser?.email}
      </Typography>

      <Button variant="contained" color="info" onClick={props.onLoginButtonClick}>
        Log in
      </Button>
    </Toolbar>
  </AppBar>;
}

export default WishlistAppBar;
