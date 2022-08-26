import React, { useState } from 'react';
// import style
import './styles/app.scss';
// import components
import Navbar from './components/Navbar';
import Cards from './components/Cards';
// import data
import data from './data';
console.log(data);

function App() {
  const [media, setMedia] = useState(data());
  return (
    <div className="App">
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
