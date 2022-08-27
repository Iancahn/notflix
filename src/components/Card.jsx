import React from 'react';

function Card(props) {

    return (
        <div className="card">
            <img src={`${props.img}`} alt="" className="card--image" />
            <p>Your progress is {props.progress}</p>
        </div>
    )
}

export default Card;
