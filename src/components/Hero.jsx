import React from 'react';
// import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
// import images
import fpb from '../img/fpb-icon.png';


function Hero() {
    return (
        <div className="hero">
            <section>
                <div className="movie-title">
                    <h1>ME TIME</h1>
                </div>
                <div className="movie-subtitle">
                    <p>In this buddy comedy, we see Mark W and Kevin H trying desperately to hold on to their fame, and rake in some easy cash in the old tired duo comedy genre.</p>
                </div>
                <div>
                    <button id="play-btn"><FontAwesomeIcon icon={faPlay} className="icon" /> Play</button>
                    <button id="more-info-btn"><FontAwesomeIcon icon={faCircleInfo} className="icon" /> More Info</button>
                </div>
                <div className="age-restrict">
                    <img src={fpb} alt="you need to be older to watch this movie" id="fpb" />
                    <p>16+</p>
                </div>
            </section>
        </div>
    )
}

export default Hero;
