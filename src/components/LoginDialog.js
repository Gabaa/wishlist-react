import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthenticationContext } from '../App';

function LoginDialog(props) {
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
    auth.signInWithEmailAndPassword(email, password)
      .then(_ => {
        handleClose();
      })
      .catch(err => {
        setError(err.code === 'auth/wrong-password' ? 'Forkert password.' : 'Der opstod en fejl: ' + err.message);
        console.log("Error signing in with email and password", err);
      });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return <Dialog open={props.open} onClose={handleClose}>
    <DialogTitle>Log ind</DialogTitle>
    <DialogContent>
      <Stack spacing={2}>
        <DialogContentText>
          Log ind med email og password. Det er nødvendigt for at kunne reservere gaver.
        </DialogContentText>

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
          onKeyPress={handleKeyPress}
        />

        {<DialogContentText color="error">
          {error}
        </DialogContentText>}
      </Stack>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={handleClose}>Annuller</Button>
      <Button color="primary" onClick={handleConfirm}>OK</Button>
    </DialogActions>
  </Dialog>
}

export default LoginDialog;