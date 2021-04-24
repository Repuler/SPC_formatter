import React, { useState } from 'react';

const MeasureNum = ({
  numOfMeasures,
  measureLen = 4,
}) => {
  let measures = [(
    <div
      className="measureHeader"
      style={{ gridColumn: '1' }}
    ></div>
  )];

  for (let i = 0; i < numOfMeasures; i++) {
    measures[i + 1] = (
      <div
        className="measureHeader"
        style={{ gridColumn: `${i * measureLen * 4 + 2} / span ${measureLen * 4}` }}
      >{i + 1}</div>
    );
  }

  return measures;
}

export default MeasureNum;
