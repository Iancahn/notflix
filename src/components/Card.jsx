import React from 'react';


function Card(props) {

    return (
        <div className="card">
            <img src={`../img/${props.img}`} alt="this is on my continue watching list" />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;
