const emailInput = (state = '', action) => {
  switch(action.type){
    case 'EMAIL_INPUT_ACTION': return action.value;
    default: return state;
  }
}

export default emailInput;
