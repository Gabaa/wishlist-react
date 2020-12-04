import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import WishCategory from './WishCategory';

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
    minWidth: "500px",
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
  const [data, setData] = useState();

  useEffect(() => {
    fetch("data.json")
      .then(resp => resp.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
  });

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.paperContents}>
          <PaperContents loading={loading} data={data} />
        </div>
      </Paper>
    </div>
  );
}

function PaperContents(props) {
  let { loading, data } = props;
  let classes = useStyles();

  if (loading) {
    return (
      <div className={classes.loading}>
        <h3>Loading...</h3>
      </div>
    );
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
