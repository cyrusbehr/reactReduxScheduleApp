const initialState = {
  timeSlotCont: [
    {time: "9:00 AM", appointment: "Jatherson", phone: "6473000244"},
    {time: "10:00 AM", appointment: "", phone: ""},
    {time: "11:00 AM", appointment: "", phone: ""},
    {time: "12:00 PM", appointment: "", phone: ""},
    {time: "1:00 PM", appointment: "", phone: ""},
    {time: "2:00 PM", appointment: "", phone: ""},
    {time: "3:00 PM", appointment: "", phone: ""},
    {time: "4:00 PM", appointment: "", phone: ""},
    {time: "5:00 PM", appointment: "", phone: ""}, ],
    currentItemItem: "",
    shouldDisplayModal: false,
    currentAppointment: "",
    currentPhone: "",
  }

  export default function timeSlotReducer(state = initialState, action) {
    switch (action.type) {
      case "CLICK":
      const newState1 = Object.assign({}, state, {shouldDisplayModal: true}, {currentItemItem: action.time})
      return newState1
      case "CLOSE_MODAL":
      const newState2 = Object.assign({}, state, {shouldDisplayModal: false});
      return newState2;
      case "UPDATE_PHONE":
      const newState3 = Object.assign({}, state, {currentPhone: action.phone});
      return newState3;
      case "UPDATE_APPOINTMENT":
      const newState4 = Object.assign({}, state, {currentAppointment: action.appointment});
      return newState4;
      case "SAVE_MODAL":
      const newState5 = Object.assign({}, state);
      console.log('made it herereeerererer')
      for(var i = 0; i < newState5.timeSlotCont.length; i++ ){
        console.log(state.currentItemItem);
        console.log(newState5.timeSlotCont[i].time)
        if(newState5.timeSlotCont[i].time === state.currentItemItem){
          newState5.timeSlotCont[i].appointment = state.currentAppointment;
          newState5.timeSlotCont[i].phone = state.currentPhone;
          break;
        }
      }
      newState5.shouldDisplayModal = false;
      return newState5;
      return newState5;
      default:
      return state;
    }
  }
