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
      <p>너 엘지있어? 나 에너지있어!</p>
    </section>
  );
}

export default Greeting;