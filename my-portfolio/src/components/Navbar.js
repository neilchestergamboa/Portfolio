import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="radio-btn-group">
        <input type="radio" name="stagger-radio-group" id="input-one" />
        <label htmlFor="input-one">
          <Link to="/">Home</Link>
        </label>
      </div>

      <div className="radio-btn-group">
        <input type="radio" name="stagger-radio-group" id="input-two" />
        <label htmlFor="input-two">
          <Link to="/about">About</Link>
        </label>
      </div>

      <div className="radio-btn-group">
        <input type="radio" name="stagger-radio-group" id="input-three" />
        <label htmlFor="input-three">
          <Link to="/contact">Contact</Link>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
