import React, { Component } from 'react';
import './LoginModal.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalToggleOff } from '../actions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleLoginInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { modalDisplay, toggleModalOff } = this.props;
    return (
      <div className={modalDisplay ? 'overlay' : 'overlay hidden'}>
        <div className={modalDisplay ? 'LoginModal' : 'LoginModal hidden'}>
          <button type="button" onClick={toggleModalOff}>X</button>
          <form onSubmit={this.loginSubmit}>
            <label htmlFor="userName">
              Username:
              <input type="text" id="userName" name="userName" onChange={this.handleLoginInput} />
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" onChange={this.handleLoginInput} />
            </label>
            <button type="submit" onClick={toggleModalOff}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

function mstp(state) {
  return {
    modalDisplay: state.modalDisplay,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    toggleModalOff: modalToggleOff,
  }, dispatch);
}

export default connect(mstp, mdtp)(LoginModal);
