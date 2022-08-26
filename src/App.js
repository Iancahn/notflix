import React from 'react';
// import style
import './styles/app.scss';
// import components
import Navbar from './components/Navbar';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
