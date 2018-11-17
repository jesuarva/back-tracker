import React from 'react';

const Inputs = ({ name, email }) => {
  console.log(name, email);
  return (
    <div>
      <input
        id="name"
        className="custom-input"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
      <input
        id="email"
        className="custom-input"
        type="text"
        name="email"
        placeholder="email"
        value={email}
      />
    </div>
  );
};

export default Inputs;
