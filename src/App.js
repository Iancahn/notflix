import React from 'react';
// import style
import './styles/app.scss';
// import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
