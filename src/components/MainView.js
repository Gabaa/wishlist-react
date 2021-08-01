import { makeStyles, Paper } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { DatabaseContext } from '../App';
import LoginDialog from './LoginDialog';
import WishCategory from './WishCategory';
import WishlistAppBar from './WishlistAppBar';


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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const db = useContext(DatabaseContext);

  useEffect(() => {
    const callback = (snapshot) => {
      setData(snapshot.val());
      setLoading(false);
    };
    const cancelCallback = (err) => {
      setError(err);
      setLoading(false);
    };
    const dataRef = db.ref('data');
    dataRef.on('value', callback, cancelCallback);

    return () => dataRef.off('value', callback);
  }, [db]);

  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  return <>
    <WishlistAppBar onLoginButtonClick={() => setLoginDialogOpen(true)} />
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.paperContents}>
          <PaperContents loading={loading} error={error} data={data} />
        </div>
      </Paper>
    </div>
    <LoginDialog
      open={loginDialogOpen}
      onClose={() => setLoginDialogOpen(false)}
    />
  </>;
}

function PaperContents(props) {
  let { loading, error, data } = props;
  let classes = useStyles();

  if (loading) {
    return (
      <div className={classes.loading}>
        <h3>Indlæser...</h3>
      </div>
    );
  }

  if (error) {
    <div className={classes.loading}>
      <h3>{error}</h3>
    </div>
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Mikkels ønskeseddel</h1>
      </header>

      <p><i>Links til eksempler findes til højre for ønsket!</i></p>

      <div className={classes.content}>
        {data.map(wishCategory => {
          let { title, notes, wishes } = wishCategory;
          return (
            <WishCategory key={title} title={title} notes={notes} wishes={wishes} />
          );
        })}
      </div>
    </>
  );
}

export default MainView;
