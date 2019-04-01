import React from 'react';

const Stats = props => {
  const {optionA, optionAcount, optionB, optionBcount} = props.data;
  return(
    <div className="stats-container">
      <span>{optionA}: {optionAcount}</span>
      <br />
      <span>{optionB}: {optionBcount}</span>
      <br />
      <span>Total Votes casted: {(parseInt(optionAcount) - 1) + (parseInt(optionBcount) - 1)}</span>
    </div>
  )
}

export default Stats;