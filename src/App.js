import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Wish from './Wish';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#dddddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
  },
  content: {
    width: "50vw",
  },
});

function App() {
  const classes = useStyles();

  const wishes = ["En ny computer", "En endnu mere ny computer"];

  return (
    <div className={classes.root}>
      <Paper>
        <header className={classes.header}>
          <h1>Mikkels ønskeseddel</h1>
        </header>
        <div className={classes.content}>
          {wishes.map(wish => {
            return (
              <Wish wish={wish} />
            );
          })}
        </div>
      </Paper>
    </div>
  );
}

export default App;
