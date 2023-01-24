import React from "react";
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={style.filter}>
        Filter
        <input type="text" value={value} onChange={onChange} className={style.input}></input>
    </label>
)

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };