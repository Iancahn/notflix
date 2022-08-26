import React from 'react';
//import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    return (
        <div className="hero">
            <section>
                <div className="movie-title">
                    <h1>ME TIME</h1>
                </div>
                <div className="movie-subtitle">
                    <p>In this buddy comedy, we see Mark and Kevin trying desperately to hold on to fame, and rake in some easy cash in the old tired duo comedy genre.</p>
                </div>
                <div>
                    <button id="play-btn"><FontAwesomeIcon icon={faPlay} className="icon" /> Play</button>
                    <button id="more-info-btn"><FontAwesomeIcon icon={faCircleInfo} className="icon" /> More Info</button>
                </div>
            </section>
        </div>
    )
}

export default Hero;
