import React from 'react';
import './Inputs.css';

const Inputs = ({ name, email, classes }) => {
  return (
    <div>
      <input
        id="name"
        className={`custom-input ${classes.name}`}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
      <input
        id="email"
        className={`custom-input ${classes.email}`}
        type="text"
        name="email"
        placeholder="email"
        value={email}
      />
    </div>
  );
};

export default Inputs;
