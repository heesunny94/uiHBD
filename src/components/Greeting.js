import React from 'react';
import './Greeting.css';
import { getByTitle } from '@testing-library/react';

function Greeting() {
  return (
    <section>
      <div class = 'HBD'>
      <h2>Happy Birthday! User Interface </h2>
      </div>
      <img src="/hbd1.gif" alt="HBD" />
      <p>Wishing you a fantastic day filled with joy and laughter.</p>
    </section>
  );
}

export default Greeting;