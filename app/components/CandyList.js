import React from 'react';
import SingleCandy from './SingleCandy';

const CandyList = props => {
  return (
    <div>
      {props.candies.map((candy, idx) => {
        return <SingleCandy key={idx} candy={candy} />;
      })}
    </div>
  );
};

export default CandyList;
