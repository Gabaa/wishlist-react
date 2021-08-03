import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from "react";

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

      {notes ? notes.map((note, i) => (
        <p key={i}>
          <i>
            {note}
          </i>
        </p>)
      ) : null}

      <Box>
        {wishes.map((wish, i) => <Wish key={i} wish={wish} />)}
      </Box>
    </div >
  );
}

function Wish(props) {
  let { text, details, links } = props.wish;
  const hasDetails = !!details;
  const hasLinks = !!links;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography>
          {text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {hasDetails ? (
          <Typography sx={{ padding: '0 16px 8px' }}>{details}</Typography>
        ) : null}
        {hasLinks ? <WishLinkList links={links} /> : null}
        {/* TODO: Vis også reservationer her */}
      </AccordionDetails>
    </Accordion>
  );
}

function WishLinkList(props) {
  const { links } = props;

  return (
    <List subheader={<ListSubheader>Links</ListSubheader>}>
      {links.map((link, i) => (
        <ListItem button dense component='a' href={link.url} target="_blank" rel="noreferrer">
          <ListItemText primary={link.tooltip} />
        </ListItem>)
      )}
    </List>
  );
}

export default WishList;