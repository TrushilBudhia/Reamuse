import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../styles/style.css'
import { VictoryMessage, HighscoreMessage, ButtonMagenta } from './FlipCardEno.styles'

const GameOver = ({ restartGame, username, score, highscore, updateGameData }) => {
    // Get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // Calling the updateGameData function to add the game data to users saved game data array
    useEffect(()=>{
        console.log('useEffect entered');
        updateGameData();
    }, [])

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
            {/* Displaying current high score for the user for the game */}
            {token && <HighscoreMessage>Current High Score: {highscore}</HighscoreMessage>}
        </div>
    );
};

export default GameOver;
