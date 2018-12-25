const shouldDisplayUsers = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_USERS': return true;
    case 'DISPLAY_BANDS': return false;
    default: return state;
  }
};

export default shouldDisplayUsers;
