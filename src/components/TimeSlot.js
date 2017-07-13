import React, { Component, PropTypes } from 'react';
import Modal from './Modal'
const TimeSlot = ({time, appointment, phone, onTimeClick }) => {



  return(
    <div className="col s12 m7">
      <div className="card horizontal" onClick={() => onTimeClick(time)}>
        <div className="card-image">
          {time}
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <span className="card-title"> {appointment}</span>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSlot;
