const ShouldDisplayBands = (state = true, action) => {
  switch (action.type) {
    case 'DISPLAY_USERS': return false;
    case 'DISPLAY_BANDS': return true;
    default: return state;
  }
};

export default ShouldDisplayBands;
