import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../App';
import CreateUserDialog from './CreateUserDialog';
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

      {user ? <LogoutButton /> : <>
        <LoginButton />
        <CreateUserButton />
      </>}
    </Toolbar>
  </AppBar>;
}

function LoginButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return <>
    <AppBarButton onClick={() => setDialogOpen(true)}>
      Log ind
    </AppBarButton>

    <LoginDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
  </>
}

function CreateUserButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return <>
    <AppBarButton onClick={() => setDialogOpen(true)}>
      Lav en ny bruger
    </AppBarButton>

    <CreateUserDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
  </>
}

function LogoutButton() {
  const auth = useContext(AuthenticationContext);

  return <>
    <AppBarButton onClick={() => auth.signOut()}>
      Log ud
    </AppBarButton>
  </>
}

function AppBarButton(props) {
  return <Button
    variant="contained"
    style={{ margin: '4px' }}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
}

export default WishlistAppBar;
