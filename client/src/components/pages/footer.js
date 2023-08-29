import React from 'react';

const styles = {
    footer: {
        background: '#f8f8f8',
        padding: '20px',
        textAlign: 'center',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
        display: 'flex,'
    }
  };

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a style={styles.link} href="https://github.com/project3" target="_blank" rel="noopener noreferrer">
        GitHub &ensp;
        </a>
        <a style={styles.link} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook &ensp;
        </a>
        <a style={styles.link} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
