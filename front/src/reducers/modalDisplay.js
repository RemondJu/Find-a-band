const modalDisplay = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_MODAL_ON': return true;
    case 'LOGIN_MODAL_OFF': return false;
    default: return state;
  }
};

export default modalDisplay;
