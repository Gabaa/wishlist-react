import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../App';
import LoginDialog from './LoginDialog';


function WishlistAppBar() {
  const [user, setUser] = useState();

  const auth = useContext(AuthenticationContext);
  auth.onAuthStateChanged(setUser);

  return <AppBar position="sticky">
    <Toolbar>
      <Typography style={{ flexGrow: 1 }}>
        {user ? <>
          Logget ind som <i>{user.email}</i>
        </> : null}
      </Typography>

      {user ? <LogoutButton /> : <LoginButton />}
    </Toolbar>
  </AppBar>;
}

function LoginButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return <>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setDialogOpen(true)}>
      Log ind
    </Button>

    <LoginDialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
    />
  </>

}

function LogoutButton() {
  const auth = useContext(AuthenticationContext);

  return <>
    <Button
      variant="contained"
      color="primary"
      onClick={() => auth.signOut()}
    >
      Log ud
    </Button>
  </>
}

export default WishlistAppBar;
