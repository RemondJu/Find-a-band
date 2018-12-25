const bandsDisplayClass = (state = true, action) => {
  switch (action.type) {
    case 'DISPLAY_BANDS': return true;
    case 'DISPLAY_USERS': return false;
    default: return state;
  }
};

export default bandsDisplayClass;
