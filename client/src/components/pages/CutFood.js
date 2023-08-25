import React from 'react';
import BigMacroLogo from '../images/BigMacroLogo.png';

const styles = {
  card: {
    margin: 20,
    background: '#6E6E6E',
    padding: '10px',
    color: '#BAFF39',
  },
  position: {
    margin: '50px',
    width: '90%',
    background: '#BAFF39',
    padding: '10px',
    display: 'block',
    color: '#6E6E6E',
  },
  image: {
    margin: '20px',
    width: '95%',
    display: 'block',
  }
};

export default function CutFood() {
  return (
    <div>
      <h1 style={styles.card} >CutFood</h1>
      <figure style={styles.position}>
        <h1>CutFood</h1>
        <a href="https://sample.github.io/project3/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={BigMacroLogo} alt="Logo" />
          Application link
        </a>
      </figure>
    </div>
  );
};