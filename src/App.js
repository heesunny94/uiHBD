import React from 'react';
import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Bar from './Bar';

function App() {
  return (
    <div className="App">
      <Header />
      <Bar />
      <Greeting />
      <Footer />
    </div>
  );
  
}

export default App;
