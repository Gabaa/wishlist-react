import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import React from "react";

const useStyles = makeStyles({
  wishCategory: {
    // margin: "32px 0",
  },
  wishRoot: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function WishCategory(props) {
  const classes = useStyles();

  const { title, notes, wishes } = props;

  return (
    <div className={classes.wishCategory}>
      <h3>{title}</h3>

      {notes ? notes.map(text => <p><i>{text}</i></p>) : null}

      <ul>
        {wishes.map(wish => <Wish key={wish["text"]} wish={wish} />)}
      </ul>
    </div >
  );
}

function Wish(props) {
  let { text, links } = props.wish;
  let classes = useStyles();

  let entry = (
    <div className={classes.wishRoot}>
      {text}
      {<div style={{ width: "64px" }} />}
      {links !== undefined ? (
        <div>
          {links.map(link => {
            return (
              <Tooltip title={link.tooltip}>
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

export default WishCategory;