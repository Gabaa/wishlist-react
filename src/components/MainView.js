import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import WishList from './WishList';
// import AppBar from './AppBar';


const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#b9bfdf",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: '80%',
    maxWidth: '800px',
    margin: "32px",
  },
  paperContents: {
    minHeight: "200px",
    margin: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
  }
});

function MainView() {
  const classes = useStyles();

  return <>
    {/* <AppBar /> */}
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.paperContents}>
          <WishlistPaper />
        </div>
      </Paper>
    </div>
  </>;
}

function WishlistPaper(props) {
  let classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <h1>Mikkels ønskeseddel</h1>
      </header>

      <div className={classes.content}>
        <WishList />
      </div>
    </>
  );
}

export default MainView;
