const messageInput = (state = '', action) => {
  switch (action.type) {
    case 'MESSAGE_INPUT_ACTION': return action.value;
    default: return state;
  }
};

export default messageInput;
