import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css'
const Chart = props => {
  const maxValue = Math.max(
    ...props.dataPoints.map(
      data => data.value
    )
  )

  return <div className='chart'>
    {props.dataPoints.map(dataPoint =>
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxValue}
        label={dataPoint.label}
      />)
    }
  </div>
}

export default Chart