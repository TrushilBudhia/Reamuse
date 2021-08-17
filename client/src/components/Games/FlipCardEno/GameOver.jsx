import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../styles/style.css'
import { VictoryMessage, HighscoreMessage, ButtonMagenta } from './FlipCardEno.styles'

const GameOver = ({ restartGame, username, score, highScore, userData, addGameData, updateGameData }) => {
    const reamuseGameId = 'flip-card-eno';
    // Get token
    console.log('userData2', userData);
    console.log('userData.savedGamesData.length2', userData.savedGamesData.length);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    // Calling the updateGameData function to add the game data to users saved game data array
    useEffect(() => {
        console.log('useEffect entered');
        (userData.savedGamesData === undefined) ? 
        addGameData() : (userData.savedGamesData.length > 0) ? updateGameData() : addGameData();
    }, []);

    const flipCardDataArray = (userData.savedGamesData) ?
        userData.savedGamesData.filter((gameData) => gameData.gameId === "flip-card-eno")
        : [];
    const sortedFlipCardDataArray = flipCardDataArray.sort((a, b) => parseFloat(b.highScore) - parseFloat(a.highScore));

    return (
        <div>
            {/* Hiding game summary components when victory message displayed */}
            {document.querySelectorAll('.game-info-paragraph').forEach((item) => item.setAttribute('style', 'display: none'))}
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
            {token && <HighscoreMessage>Current High Score: {(userData.length > 0) ? sortedFlipCardDataArray[0].highScore : score}</HighscoreMessage>}
        </div>
    );
};

export default GameOver;
