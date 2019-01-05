export const modalToggleOn = () => ({
  type: 'LOGIN_MODAL_ON',
});

export const modalToggleOff = () => ({
  type: 'LOGIN_MODAL_OFF',
});

export const displayBands = () => ({
  type: 'DISPLAY_BANDS',
});

export const displayUsers = () => ({
  type: 'DISPLAY_USERS',
});

export const nameInputAction = value => ({
  type: 'NAME_INPUT_ACTION',
  value,
});

export const emailInputAction = value => ({
  type: 'EMAIL_INPUT_ACTION',
  value,
});

export const messageInputAction = value => ({
  type: 'MESSAGE_INPUT_ACTION',
  value,
});
