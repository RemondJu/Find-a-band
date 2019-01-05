const nameInput = (state = '', action) => {
  switch(action.type){
    case 'NAME_INPUT_ACTION': return action.value;
    default: return state;
  }
}

export default nameInput;
