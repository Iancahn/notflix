import { v4 as uuidv4 } from "uuid";
// import Images
import breaking from './img/breaking-bad.jpg';
import friends from './img/friends.jpg';
import office from './img/office.jpg';
import you from './img/you.jpg';
import game from './img/game.jpg';
import stranger from './img/stranger-things.jpg';
import billburr from './img/bill-burr.jpg';
import hustle from './img/hustle.jpg';
import ted2 from './img/ted2.jpg';
import devil from './img/devils-advocate.jpg';
import fury from './img/fury.jpg';
import ronny from './img/ronny-cheng.jpg';

function Media() {
    return [
        {
            name: 'Breaking Bad',
            img: { breaking },
            progress: 90,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Friends',
            img: { friends },
            progress: 50,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'The Office',
            img: { office },
            progress: 20,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'You',
            img: { you },
            progress: 97,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'The Game',
            img: { game },
            progress: 10,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Stranger Things',
            img: { stranger },
            progress: 24,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Bill Burr Show',
            img: { billburr },
            progress: 99,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Hustle',
            img: { hustle },
            progress: 90,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Ted 2',
            img: { ted2 },
            progress: 50,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Devils Advocate',
            img: { devil },
            progress: 96,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Fury',
            img: { fury },
            progress: 50,
            category: "continue-category",
            id: uuidv4(),
        },
        {
            name: 'Ronny Cheng',
            img: { ronny },
            progress: 20,
            category: "continue-category",
            id: uuidv4(),
        },
    ]
}

export default Media;