const initialState = {
  timeSlotCont: [
    {time: "9:00", appointment: "", phone: ""},
    {time: "10:00", appointment: "", phone: ""},
    {time: "11:00", appointment: "", phone: ""},
    {time: "12:00", appointment: "", phone: ""},
    {time: "1:00", appointment: "", phone: ""},
    {time: "2:00", appointment: "", phone: ""},
    {time: "3:00", appointment: "", phone: ""},
    {time: "4:00", appointment: "", phone: ""},
    {time: "5:00", appointment: "", phone: ""}, ]
}

export default function timeSlotReducer(state = initialState, action) {
  switch (action.type) {
    default:
    return state;
  }
}
