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
<<<<<<< HEAD
          href="#main"
          onClick={() => handlePageChange('MainPage')}

          style={styles.font}
=======
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
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
        > Home
        </a>
      </li>
      <li style={styles.heading}>
        <a
<<<<<<< HEAD
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          style={styles.font}
        > Resume
=======
          href="#bulkFood"
          onClick={() => handlePageChange('bulkFood')}

          style={styles.font}
        >
          Bulking
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
        </a>
      </li>
      <li style={styles.heading}>
        <a
<<<<<<< HEAD
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
=======
          href="#cutFood"

          onClick={() => handlePageChange('cutFood')}
          style={styles.font}
        >
          Cutting
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
