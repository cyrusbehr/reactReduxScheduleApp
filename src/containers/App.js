// TODO: get form to populate with information when updating

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import TimeSlot from '../components/TimeSlot'
import ModalComp from '../components/Modal'
// import Counter from '../components/Counter';
// import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const {updateAppointment, updatePhone, saveModal, closeModal, timeSlotCont, shouldDisplayModal, onTimeClick, currentItemItem} = this.props;
    return (
      <div className="main-app-container">
        <ModalComp shouldDisplayModal={shouldDisplayModal} time={currentItemItem} close={closeModal} save={saveModal}
          updateAppointment={updateAppointment}
          updatePhone = {updatePhone}
        />
        {timeSlotCont.map((element, index) => {
          return(
            <TimeSlot key={index} time={element.time} appointment={element.appointment} phone={element.phone} onTimeClick={onTimeClick}/>
          )
        })}
      </div>
    );
  }
}


/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    timeSlotCont: state.timeSlotReducer.timeSlotCont,
    currentItemItem: state.timeSlotReducer.currentItemItem,
    shouldDisplayModal: state.timeSlotReducer.shouldDisplayModal,
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onTimeClick: (time) => dispatch({type: "CLICK", time: time}),
    closeModal: () => dispatch({type: "CLOSE_MODAL"}),
    saveModal: () => dispatch({type: "SAVE_MODAL"}),
    updatePhone: (phone) => dispatch({type: "UPDATE_PHONE", phone: phone}),
    updateAppointment: (appointment) => dispatch({type: "UPDATE_APPOINTMENT", appointment: appointment})
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
