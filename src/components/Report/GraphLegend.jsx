import React from 'react';

const GraphLegend = props => {
  const {optionA, optionB, optionAcolor, optionBcolor} = props;

  return (
    <div className="legend-container">
      <div className="inner-legend">
        <div className="color-box" style={{ background: optionAcolor }} />
        <div className="text-box">{optionA}</div>
      </div>
      <div className="inner-legend">
        <span className="color-box" style={{ background: optionBcolor }}/>
        <span className="text-box">{optionB}</span>
      </div>
    </div>
  );
}

export default GraphLegend;