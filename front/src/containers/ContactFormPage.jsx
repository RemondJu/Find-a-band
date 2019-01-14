import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameInputAction, emailInputAction, messageInputAction } from '../actions';
import './ContactFormPage.scss';

class ContactFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleContactInput = this.handleContactInput.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }

  handleContactInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleContactSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="ContactFormPage">
        <form onSubmit={this.handleContactSubmit}>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" value={name} onChange={this.handleContactInput} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" value={email} onChange={this.handleContactInput} />
          </label>
          <label htmlFor="message">
            Message:
            <textarea type="text" name="message" value={message} onChange={this.handleContactInput} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const mstp = state => ({
  nameInput: state.nameInput,
  emailInput: state.emailInput,
  messageInput: state.messageInput,
});

const mdtp = dispatch => bindActionCreators({
  nameInputAction,
  emailInputAction,
  messageInputAction,
}, dispatch);

export default connect(mstp, mdtp)(ContactFormPage);
