import React from 'react';
// import components
import Card from './Card';

function Cards() {
    return (
        <section>
            <div>
                <h3>Continue Watching for userName goes here</h3>
            </div>
            <div className="card-view">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="card-view">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Cards;
