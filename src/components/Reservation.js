import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { DatabaseContext } from '../App';

function Reservation(props) {
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

    const reservationsRef = db.ref(`reservations/${props.wish}`);
    reservationsRef.on('value', callback, cancelCallback);
    return () => reservationsRef.off('value', callback);
  }, [db, props.wish]);

  if (loading) return (
    <List subheader={<ListSubheader>Loading reservations...</ListSubheader>} />
  );

  if (error) return (
    <List subheader={
      <ListSubheader>
        <Typography color="error">An error occurred: {error.message}</Typography>
      </ListSubheader>
    } />
  );

  if (data === null) return null;

  return (
    <List subheader={<ListSubheader>Reservations</ListSubheader>}>
      <ListItem dense button>
        <ListItemText>
          {JSON.stringify(data)}
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Reservation;