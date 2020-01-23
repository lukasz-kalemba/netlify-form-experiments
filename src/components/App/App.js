import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form name='contact' method='POST' data-netlify='true'>
      <p>
        <label>
          Your Name:{' '}
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea name='message' value={message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
};

export default App;
