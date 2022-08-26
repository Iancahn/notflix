import React from 'react';
// import style
import './styles/app.scss';
// import components
import Card from './components/Card';
// import pages
import Home from './pages/Home';
// import data
import data from './data';
console.log(data);


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        // using a spread instead of passing object below:
        {...item}
      // spread replaces this below:
      // item={item}
      // line above replaces all of this :
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      />
    )
  })


  return (
    <div className="App">
      <Home />
      {cards}
    </div>
  );

}

export default App;
