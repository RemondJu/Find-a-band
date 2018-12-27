import React from 'react';
import './ContactFormPage.scss';

const ContactFormPage = () => (
  <div className="ContactFormPage">
    <form>
      <label htmlFor="name">
        Name:
      </label>
      <input type="text" name="name" id="name" value="" />
      <label htmlFor="email">
        Email:
      </label>
      <input type="email" name="email" value="" />
      <label htmlFor="message">
        Message:
      </label>
      <textarea type="text" name="message" value="" />
    </form>
  </div>
);

export default ContactFormPage;
