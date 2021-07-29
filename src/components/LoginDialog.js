import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  textField: {
    marginBottom: '8px',
  }
});

function LoginDialog(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    // TODO: Handle validation and login
    console.log("Logged in, woo!");

    props.onClose();
    setEmail('');
    setPassword('');
  };

  return <Dialog open={props.open} onClose={props.onClose}>
    <DialogTitle>Log in</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Log in using your email and password.
      </DialogContentText>
      <form className={classes.form} onSubmit={handleConfirm}>
        <TextField
          className={classes.textField}
          label="Email"
          type="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
      </form>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={props.onClose}>Cancel</Button>
      <Button color="primary" onClick={handleConfirm}>Confirm</Button>
    </DialogActions>
  </Dialog>
}

export default LoginDialog;