import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase';


function WishlistAppBar(props) {
  return <AppBar position="sticky">
    <Toolbar>
      <Typography style={{ flexGrow: 1 }}>
        {auth.currentUser ? <>
          Logget ind som <i>{auth.currentUser.email}</i>
        </> : null}
      </Typography>

      <Button variant="contained" color="info" onClick={props.onLoginButtonClick}>
        Log ind
      </Button>
    </Toolbar>
  </AppBar>;
}

export default WishlistAppBar;
