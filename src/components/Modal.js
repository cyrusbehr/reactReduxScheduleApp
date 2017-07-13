import React, {Component, PropTypes} from 'react'
import Modal from 'react-modal'



const ModalComp = ({ time, appointment, shouldDisplayModal, close, save, updatePhone, updateAppointment }) => {
  const customStyle = {
  overlay : {
    position          : 'fixed',
    top               : 100,
    left              : 100,
    right             : 100,
    bottom            : 300,
    backgroundColor   : 'rgba(255, 255, 255, 0)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#1880F4',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    color                      : 'white'

  }
}


  return (
<div>
  <Modal
  isOpen={shouldDisplayModal}
  style={customStyle}
  closeTimeoutMS={1000}
  contentLabel="Modal"
>
  <h2>{"Add Appointment for " + time}</h2>
  <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input onChange={(event) => updateAppointment(event.target.value)} id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">First Name</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input onChange={(event) => updatePhone(event.target.value)} id="icon_telephone" type="tel" className="validate " />
            <label htmlFor="icon_telephone">Telephone</label>
            <div className = 'btn-container'>
              <a onClick={close} id="cancel-btn" className="waves-effect waves-light btn">Cancel</a>
              <a onClick={save}id="save-btn" className="waves-effect waves-light btn">Save</a>
            </div>
          </div>
        </div>
      </form>
    </div>
</Modal>
</div>
  )
}

export default ModalComp;
