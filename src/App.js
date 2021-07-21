import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import WishCategory from './components/WishCategory';
import { db } from './firebase';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#b9bfdf",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const callback = (snapshot) => {
      setData(snapshot.val());
      setLoading(false);
    };
    const cancelCallback = (err) => {
      setError(err);
      setLoading(false);
    };
    db.ref('data').on('value', callback, cancelCallback);
  });

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.paperContents}>
          <PaperContents loading={loading} error={error} data={data} />
        </div>
      </Paper>
    </div>
  );
}

function PaperContents(props) {
  let { loading, error, data } = props;
  let classes = useStyles();

  if (loading) {
    return (
      <div className={classes.loading}>
        <h3>Loading...</h3>
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

export default App;
