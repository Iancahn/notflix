import React from 'react';
// import components
import Card from './Card';
// import splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import data
import data from '../data';

console.log(data);

function Cards() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                // using a spread instead of passing object below:
                {...item}
            />
        )
    })
    return (
        <Splide options={{ drag: 'free', }}>
            <SplideSlide>
                <div className="card--list">
                    {cards}
                </div>
            </SplideSlide>
        </Splide>
    )
}



export default Cards;
