import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { useState } from "react";

function WishList(props) {
  const { data } = props;

  return <>
    {data.map(wishCategory => {
      let { title, notes, wishes } = wishCategory;
      return (
        <WishCategory key={title} title={title} notes={notes} wishes={wishes} />
      );
    })}
  </>
}

function WishCategory(props) {
  const { title, notes, wishes } = props;

  return (
    <div>
      <h3>{title}</h3>

      {notes ? notes.map((note, i) => <p key={i}><i>{note}</i></p>) : null}

      <List>
        {wishes.map((wish, i) => <Wish key={i} wish={wish} />)}
      </List>
    </div >
  );
}

function Wish(props) {
  let { text, links } = props.wish;

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ListItem button>
        <ListItemText primary={text} />
        <ListItemSecondaryAction>
          <IconButton disabled={!links} onClick={() => setExpanded(!expanded)}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={expanded}>
        TODO: Vis links og reservationer her
      </Collapse>
    </>
  );
}

export default WishList;