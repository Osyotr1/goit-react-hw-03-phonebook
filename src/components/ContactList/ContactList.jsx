import React from "react";
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={style.list}>
    {contacts.map(({id, name, number}) => (
      <li key={id} className={style.item}>
        <p className={style.name}>{name}:<span className={style.number}>{number}</span></p>
        <button onClick={() => onDelete(id)} className={style.delete}>Delete</button>
      </li>
    ))}
  </ul>
)


export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};