import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function WishlistAppBar(props) {
  return <AppBar position="sticky">
    <Toolbar>
      <IconButton edge="start">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        Mikkels ønskeseddel
      </Typography>
    </Toolbar>
  </AppBar>;
}

export default WishlistAppBar;
