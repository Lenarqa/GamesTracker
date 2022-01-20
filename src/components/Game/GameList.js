import React from 'react';
import Game from './Game';
import classes from './GameList.module.css';

const GameList = (props) => {
    return (
        <ul className={classes.gameList}>
            {props.games.map((game)=>(
                <Game key={game.title} title={game.title} players={game.players}/>
            ))}
        </ul>
    );
};

export default GameList;