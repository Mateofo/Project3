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
          href="#signIn"
          onClick={() => handlePageChange('signIn')}

          style={styles.font}
        > Sign In
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          style={styles.font}
        > Home
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#bulkFood"
          onClick={() => handlePageChange('bulkFood')}

          style={styles.font}
        >
          Bulking
        </a>
      </li>
      <li style={styles.heading}>
        <a
          href="#cutFood"

          onClick={() => handlePageChange('cutFood')}
          style={styles.font}
        >
          Cutting
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
