import React from 'react';
// import style
import './styles/app.scss';
// import components
import Cards from './components/Cards'
import Intro from './components/Intro'
// import pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Intro />
      <Cards />
    </div>
  );

}

export default App;
