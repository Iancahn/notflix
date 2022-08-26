import { v4 as uuidv4 } from "uuid";
// import Images
import breaking from '../img/breaking-bad.jpg';
import friends from '../img/friends.jpg';
import office from '../img/office.jpg';
import you from '../img/you.jpg';
import game from '../img/game.jpg';
import stranger from '../img/stranger-things.jpg';
import billburr from '../img/billburr.jpg';
import hustle from '../img/hustle.jpg';
import ted2 from '../img/ted2.jpg';
import devil from '../img/devils-advocate.jpg';
import fury from '../img/fury.jpg';
import ronny from '../img/ronny-cheng.jpg';

function Media() {
    return [
        {
            name: 'Breaking Bad',
            cover: { breaking },
            progress: 90,
        },
        {
            name: 'Friends',
            cover: { friends },
            progress: 50,
        },
        {
            name: 'The Office',
            cover: { office },
            progress: 20,
        },
        {
            name: 'You',
            cover: { you },
            progress: 97,
        },
        {
            name: 'The Game',
            cover: { game },
            progress: 10,
        },
        {
            name: 'Stranger Things',
            cover: { stranger },
            progress: 24,
        },
        {
            name: 'Bill Burr Show',
            cover: { billburr },
            progress: 99,
        },
        {
            name: 'Hustle',
            cover: { hustle },
            progress: 90,
        },
        {
            name: 'Ted 2',
            cover: { ted2 },
            progress: 50,
        },
        {
            name: 'Devils Advocate',
            cover: { devil },
            progress: 96,
        },
        {
            name: 'Fury',
            cover: { fury },
            progress: 50,
        },
        {
            name: 'Ronny Cheng',
            cover: { ronny },
            progress: 20,
        },
    ]
}