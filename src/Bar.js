import React from 'react';

function Bar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}><a href="/">Home</a></li>
        <li style={{ margin: '0 10px' }}><a href="/about">About</a></li>
        <li style={{ margin: '0 10px' }}><a href="/services">Services</a></li>
        <li style={{ margin: '0 10px' }}><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Bar;
