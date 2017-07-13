import React, { Component, PropTypes } from 'react';

const TimeSlot = ({time, appointment, phone }) => {
  return(
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          {time}
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <span class="card-title">{appointment}</span>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSlot;
