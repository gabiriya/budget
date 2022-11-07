export const addEntryRedux = (payload) => {
 return {
  type: "ADD_ENTRY",
  payload,
 };
};

export const removeEntry = (id) => {
 return {
  type: "REMOVE_ENTRY",
  payload: { id },
 };
};
