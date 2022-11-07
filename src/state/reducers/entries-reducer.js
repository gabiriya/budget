const entriesReducer = (state = initialEntries, action) => {
 let newEntries;
 switch (action.type) {
  case "ADD_ENTRY":
   newEntries = state.concat({ ...action.payload });
   return newEntries;
  case "REMOVE_ENTRY":
   newEntries = state.filter((entry) => entry.id !== action.payload.id);
   return newEntries;

  default:
   return state;
 }
};

export default entriesReducer;

var initialEntries = [
 {
  id: 10,
  description: "Work income",
  value: 300.0,
  isExpense: false,
 },
 {
  id: 20,
  description: "Water bill",
  value: 20,
  isExpense: true,
 },
 {
  id: 30,
  description: "Rent",
  value: 300.0,
  isExpense: true,
 },
 {
  id: 40,
  description: "Power bill",
  value: 50,
  isExpense: true,
 },
];
