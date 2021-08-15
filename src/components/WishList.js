import { Box, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from "react";
import { DatabaseContext } from '../App';
import Wish from './Wish';

function WishList() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const db = useContext(DatabaseContext);
  useEffect(() => {
    const callback = (snapshot) => {
      let categoryArray = Object.values(snapshot.val());
      categoryArray.sort((a, b) => a.order - b.order);
      setCategories(categoryArray);
      setLoading(false);
    }

    const cancelCallback = (err) => {
      setError(err);
      setLoading(false);
    }

    let categoriesRef = db.ref('categories');
    categoriesRef.on('value', callback, cancelCallback);
    return () => categoriesRef.off('value', callback);
  }, [db])

  if (loading) {
    return <Typography variant='h5' sx={{ textAlign: 'center' }}>Loading...</Typography>
  }

  if (error) {
    return <Typography variant='h5' sx={{ textAlign: 'center' }} color='error'>An error occurred: {error.message}</Typography>
  }

  return <>
    {categories.map(category => {
      let { title, wishes } = category;
      return (
        <WishCategory key={title} title={title} wishes={wishes} />
      );
    })}
  </>
}

function WishCategory(props) {
  const { title, wishes } = props;

  return (
    <div>
      <h3>{title}</h3>

      <Box>
        {wishes.map((wish, i) => <Wish key={i} wish={wish} />)}
      </Box>
    </div >
  );
}

export default WishList;