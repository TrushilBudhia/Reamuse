import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../styles/style.css'
import { VictoryMessage, ButtonMagenta } from './FlipCardEno.styles'

const GameOver = ({ restartGame, username, score }) => {
    // Get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    return (
        <div>
            {/* Hide timer section */}
            {document.querySelector('.time-remaining').setAttribute('style', 'display: none')}
            {score >= 50 &&
                <VictoryMessage>Congratulations {username}! Your score is <span>{score}</span></VictoryMessage>
            }
            {score < 50 && score >= 1 &&
                <VictoryMessage>Your score is <span>{score}</span></VictoryMessage>
            }
            {score < 1 &&
                <VictoryMessage>Too bad! You ran out of time. Your score is <span>{score}</span></VictoryMessage>
            }
            <ButtonMagenta onClick={restartGame}>
                Play Again?
            </ButtonMagenta>
            <br />
            {token && <Link to="/dashboard">
                <ButtonMagenta className="flex-center">
                    Back to dashboard
                </ButtonMagenta>
            </Link>}
            {!token && <Link to="/login">
                <ButtonMagenta className="flex-center">
                    Login
                </ButtonMagenta>
            </Link>}
        </div>
    );
};

export default GameOver;
