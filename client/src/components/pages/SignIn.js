import React, { useState } from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#6E6E6E',
    padding: '10px',
    color: '#BAFF39',
  },
  position: {
    margin: '70px',
    width: '30%',
    background: '#BAFF39',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: '20px',
    width: '20%',
    justifyContent: 'center',
  }
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!newEmail.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError('Name is required');
      return;
    }

    if (!email || emailError) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      // Optionally, reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setNameError('');
      setEmailError('');
    }, 2000);
  };

  return (
    <div>
      <h2 style={styles.card} >Contact Information</h2>
      <form style={styles.position} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={handleNameBlur}
        />
        {nameError && <p className="error">{nameError}</p>}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error">{emailError}</p>}
        &ensp;
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button style={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;