import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#6E6E6E',
    padding: '10px'
  },
  heading: {
    lineHeight: 3,
    fontSize: '2rem',
    padding: '0 20px',
    display: 'inline-block',
  },
  font: {
    color: '#BAFF39',
    margin: 'theme.spacing(5)',
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.card}>
      <li style={styles.heading}>
        <a
          href="#main"
          onClick={() => handlePageChange('MainPage')}

          style={styles.font}
        > Home
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          style={styles.font}
        > Resume
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          style={styles.font}
        >
          Portfolio
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          style={styles.font}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
