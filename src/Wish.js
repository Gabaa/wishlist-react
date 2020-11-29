import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  wish: {
    margin: "16px",
  },
});

function Wish(props) {
  const classes = useStyles();

  return (
    <div className={classes.wish}>
      <Paper variant="elevation">
        <h3>
          {props.wish}
        </h3>
      </Paper>
    </div>
  );
}

export default Wish;