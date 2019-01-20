import React, { Component } from 'react';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContactInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const data = {
      name,
      email,
      message,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch('http://localhost:3600/api/', config)
      .then(res => res.json());
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="ContactFormPage">
        <form onSubmit={this.handleSubmit}>
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

export default ContactFormPage;
