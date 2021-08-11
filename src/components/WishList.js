import { Box } from '@material-ui/core';
import React from "react";
import Wish from './Wish';

function WishList(props) {
  const { data } = props;

  return <>
    {data.map(wishCategory => {
      let { title, wishes } = wishCategory;
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