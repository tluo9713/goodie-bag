import React from 'react';

const SingleCandy = props => {
  const candy = props.candy;
  return (
    <div>
      <div>Name: {candy.name}.</div>
      <div>Description: {candy.description}.</div>
      <div>quantity: {candy.quantity}.</div>
      <div>{candy.imageUrl}.</div>
    </div>
  );
};

export default SingleCandy;
