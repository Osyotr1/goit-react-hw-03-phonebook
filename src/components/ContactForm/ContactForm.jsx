import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name:'',
        number: ''
    }

    handleChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state)
      this.setState({name: '', number: ''})
  };


    render() {
    
    const { name, number } = this.state;

    return (   
    <form onSubmit={this.handleSubmit} className={style.form}>
      <label className={style.label}>Name<br></br>
        <input className={style.inputName}
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        </label>
      <label className={style.label}>Number<br></br>
      <input className={style.inputNumber}
        type="tel"
        name="number"
        value={number}
        onChange={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
      </label>
      <button type="Submit" className={style.submit}>Add contact</button>
      </form>
    )
    }
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};