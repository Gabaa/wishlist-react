import React from "react";
import Wish from './Wish.js';

function WishCategory(props) {
  const { title, notes, wishes } = props;

  return (
    <div>
      <h3>{title}</h3>

      {notes ? notes.map((note, i) => <p key={i}><i>{note}</i></p>) : null}

      <ul>
        {wishes.map((wish, i) => <Wish key={i} wish={wish} />)}
      </ul>
    </div >
  );
}

export default WishCategory;