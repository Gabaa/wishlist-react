import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../App';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
});

function LoginDialog(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const auth = useContext(AuthenticationContext);

  const handleClose = () => {
    props.onClose();
    setEmail('');
    setPassword('');
    setError(null);
  };

  const handleConfirm = () => {
    // TODO: Handle validation and login
    auth.signInWithEmailAndPassword(email, password)
      .then(_ => {
        handleClose();
      })
      .catch(err => {
        setError(err.code === 'auth/wrong-password' ? 'Wrong password.' : err.message);
        console.log("Error signing in with email and password", err);
      });
  };

  return <Dialog open={props.open} onClose={handleClose}>
    <DialogTitle>Log ind</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Log ind med email og password. Det er nødvendigt for at kunne reservere gaver.
      </DialogContentText>
      <form className={classes.form} onSubmit={handleConfirm}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onInput={e => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onInput={e => setPassword(e.target.value)}
        />
      </form>
      {<DialogContentText color="error">
        {error}
      </DialogContentText>}
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={handleClose}>Cancel</Button>
      <Button color="primary" onClick={handleConfirm}>Confirm</Button>
    </DialogActions>
  </Dialog>
}

export default LoginDialog;