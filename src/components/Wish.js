import { makeStyles } from '@material-ui/core';
import { IconButton, Tooltip } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import React from "react";

const useStyles = makeStyles({
  wishRoot: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wishLinkContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
  }
});

function Wish(props) {
  let { text, links } = props.wish;
  let classes = useStyles();

  let entry = (
    <div className={classes.wishRoot}>
      {text}
      {<div style={{ width: "64px" }} />}
      {links !== undefined ? (
        <div className={classes.wishLinkContainer}>
          {links.map((link, i) => {
            return (
              <Tooltip key={i} title={link.tooltip}>
                <IconButton href={link.url} target="_blank" rel="noreferrer" size="small">
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            );
          })}
        </div>
      ) : ""}
    </div>
  );

  return (
    <li>
      {entry}
    </li>
  );
}

export default Wish;