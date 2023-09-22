import React from 'react';
import './ChartBar.css'
const ChartBar = props => {
  let barFillHeight = '0%'

  if (props.maxValue > 0) {
    console.log(props.maxValue)
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <div>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barFillHeight }}>

          </div>

        </div>

      </div>
      <div className="chart-bar__label">
        {props.label}
      </div>
    </div>


  )

}

export default ChartBar