import React from "react";
import './styles.scss'
import '../../../styles/style.css'
import { VictoryMessage, ButtonMagenta } from './FlipCardEno.styles'


const GameOver = ({ restartGame, score }) => {
    return (
        <div className="centered">
            {score >= 50 &&
                <VictoryMessage className="text-is-white">Congratulations! Your score is <span className="pl-1">{score}</span></VictoryMessage>
            }
            {score < 50 && score >= 1 &&
                <h1 className="text-is-white">Your score is <span className="pl-1">{score}</span></h1>
            }
            {score < 1 &&
                <h1 className="text-is-white">Too bad! You ran out of time. Your score is <span className="pl-1">{score}</span></h1>
            }
            <ButtonMagenta className="flex-center" onClick={restartGame}>
                Play Again?
            </ButtonMagenta>
        </div>
    );
};

export default GameOver;
