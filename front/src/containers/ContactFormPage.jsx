import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameInputAction, emailInputAction, messageInputAction } from '../actions';
import './ContactFormPage.scss';

const ContactFormPage = (props) => {
  const { nameInput, nameInputAction, emailInput, emailInputAction, messageInput, messageInputAction } = props;
  return (
    <div className="ContactFormPage">
    <form>
      <label htmlFor="name">
        Name:
      </label>
      <input type="text" name="name" id="name" value={nameInput} onChange={(e) => nameInputAction(e.target.value)} />
      <label htmlFor="email">
        Email:
      </label>
      <input type="email" name="email" value={emailInput} onChange={(e) => emailInputAction(e.target.value)} />
      <label htmlFor="message">
        Message:
      </label>
      <textarea type="text" name="message" value={messageInput} onChange={(e) => messageInputAction(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  </div>
  )
};

function mstp(state) {
  return {
    nameInput: state.nameInput,
    emailInput: state.emailInput,
    messageInput: state.messageInput,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    nameInputAction,
    emailInputAction,
    messageInputAction,
  }, dispatch)
}

export default connect(mstp, mdtp)(ContactFormPage);
