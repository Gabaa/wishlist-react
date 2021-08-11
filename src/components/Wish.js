import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

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
        {true ? (
          <div>Hello</div>
        ) : null}
      </AccordionDetails>
    </Accordion>
  );
}

function WishLinkList(props) {
  const { links } = props;

  return (
    <List subheader={<ListSubheader>Links</ListSubheader>}>
      {links.map((link, i) => (
        <ListItem key={i} button dense component='a' href={link.url} target="_blank" rel="noreferrer">
          <ListItemText primary={link.tooltip} />
        </ListItem>)
      )}
    </List>
  );
}

export default Wish;