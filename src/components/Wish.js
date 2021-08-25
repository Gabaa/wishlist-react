import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { useContext, useEffect, useState } from 'react';
import { DatabaseContext } from '../App';

function Wish(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const db = useContext(DatabaseContext);
  useEffect(() => {
    const callback = (snapshot) => {
      setData(snapshot.val());
      setLoading(false);
    }

    const cancelCallback = (err) => {
      setError(err);
      setLoading(false);
    }

    const wishRef = db.ref(`wishes/${props.wish}`);
    wishRef.on('value', callback, cancelCallback);
    return () => wishRef.off('value', callback);
  }, [db, props.wish]);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        disabled={loading || error}
      >
        <WishTitle loading={loading} error={error} data={data} />
      </AccordionSummary>
      <AccordionDetails>
        {/* TODO: Læg også disse over i et component, fx WishDetails */}
        {!!data?.details ? (
          <Typography sx={{ padding: '0 16px 8px' }}>{data.details}</Typography>
        ) : null}
        {!!data?.links ? <WishLinkList links={data.links} /> : null}
        {/* TODO: Vis også reservationer her */}
        {false ? (
          <div>Hello</div>
        ) : null}
      </AccordionDetails>
    </Accordion>
  );
}

function WishTitle(props) {
  const { loading, error, data } = props;

  if (loading) {
    return null;
  }

  if (error) {
    return <Typography color='error'>An error occurred: {error.message}</Typography>
  }

  return <Typography>{data?.text}</Typography>
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