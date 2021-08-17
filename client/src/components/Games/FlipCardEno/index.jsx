import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../../utils/auth';
import { getDate } from '../../../utils/helpers'
import { UPDATE } from '../../../utils/mutations'
import { saveGameDataIds, getSavedGamesDataIds } from '../../../utils/localStorage';
import { GET_ME } from '../../../utils/queries';

import Card from "./Card";
import GameOver from "./GameOver";
import { ContentContainer, Header, Title, TitleHeader, GameSummary, GameTimer, TimeRemaining, Gameboard } from './FlipCardEno.styles'

const FlipCardEno = () => {
    // Declaring and assigning startTime variable and cards Array
    const startTime = 100;
    const cards = [
        "flipcard-1",
        "flipcard-1",
        "flipcard-2",
        "flipcard-2",
        "flipcard-3",
        "flipcard-3",
        "flipcard-4",
        "flipcard-4",
        "flipcard-5",
        "flipcard-5",
        "flipcard-6b",
        "flipcard-6b"
    ];

    const reamuseGameId = 'flip-card-eno';
    const reamuseGameTitle = 'Flip Card Eno';

    // Setting up useQuery
    const { data } = useQuery(GET_ME);
    const userData = data?.me || {};
    console.log('userData', userData);

    // Updating user data
    const [userProfileData, setUserProfileData] = useState({
        _id: userData._id,
        __typename: userData.__typename,
        email: userData.email,
        username: userData.username,
        userAvatar: userData.userAvatar,
        gameCount: userData.gameCount,
        savedGamesData: userData.savedGamesData,
    });
    // console.log('userProfileData', userProfileData);

    const [savedGameDataIds, setSavedGameDataIds] = useState(getSavedGamesDataIds);
    // Setting up mutation
    const [saveGameData, { error }] = useMutation(UPDATE);

    useEffect(() => {
        return () => saveGameDataIds(savedGameDataIds);
    });
    // console.log('savedGameDataIds',savedGameDataIds);

    // HELPER FUNCTION - shuffling the cards
    const shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    // SETTING UP THE CARDS 
    const [cardList, setCardList] = useState(
        shuffle(cards).map((name, index) => {
            return {
                id: index,
                name: name,
                flipped: false,
                matched: false
            };
        })
    );

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    // GAME LOGIC
    const handleClick = (name, index) => {
        setGameStart(true);
        let currentCard = {
            name,
            index
        };

        // Update card is flipped
        let updateCards = cardList.map(card => {
            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });
        let updateFlipped = flippedCards;
        updateFlipped.push(currentCard);
        setFlippedCards(updateFlipped);
        setCardList(updateCards);

        // If 2 cards are flipped, check if they are a match
        if (flippedCards.length === 2) {
            setTimeout(() => {
                check();
            }, 750);
        }
    };

    const check = () => {
        let updateCards = cardList;
        if (
            flippedCards[0].name === flippedCards[1].name &&
            flippedCards[0].index !== flippedCards[1].index
        ) {
            updateCards[flippedCards[0].index].matched = true;
            updateCards[flippedCards[1].index].matched = true;
            isGameOver();
        } else {
            updateCards[flippedCards[0].index].flipped = false;
            updateCards[flippedCards[1].index].flipped = false;
        }
        setCardList(updateCards);
        setFlippedCards([]);
    };

    const isGameOver = () => {
        let done = true;
        cardList.forEach(card => {
            if (!card.matched) done = false;
        });
        setGameOver(done);
    };

    // RESTART - REDO SETUP
    const restartGame = () => {
        // Show timer
        document.querySelector('.time-remaining').setAttribute('style', 'display: flex')
        // Shuffle cards on gameboard
        setCardList(
            shuffle(cards).map((name, index) => {
                return {
                    id: index,
                    name: name,
                    flipped: false,
                    matched: false
                };
            })
        );
        setFlippedCards([]);
        setGameOver(false);
        setTime(startTime);
    };

    // COUNTDOWN TIMER
    const [time, setTime] = useState(startTime);
    const CountDownTimer = () => {

        const tick = () => {
            setTime(time - 1);
        };

        useEffect(() => {
            if (gameStart) {
                const timerId = setInterval(() => tick(), 1000);

                if (time === 0 || gameOver) {
                    clearInterval(timerId);
                    setGameOver(true);
                    setGameStart(false);
                }
                return () => clearInterval(timerId);
            }
        });

        return (
            <div>
                <GameTimer className="countdown-timer">{`${time.toString()}`}</GameTimer>
            </div>
        );
    }

    const updateGameData = async () => {
        // Perform update function if game is over and user has a account token
        if (gameOver && token) {
            console.log('updateGameData entered');
            // Extracting the user highscore from the game data for the game
            const gameDataArray = (userData.savedGamesData) ?
            userData.savedGamesData.filter((gameData) => gameData.gameId === reamuseGameId)
            : [];
            const sortedGameDataArray = gameDataArray.sort((a, b) => parseFloat(b.highScore) - parseFloat(a.highScore));
            const highScore = sortedGameDataArray[0].highScore;
            // Assigning score the value of the time remaining 
            const score = document.querySelector(".countdown-timer").innerHTML;

            const gameDataToAdd = {
                gameId: reamuseGameId,
                gameTitle: reamuseGameTitle,
                score: Number(score),
                highScore: Number(highScore),
                highScoreDate: getDate(),
                // playCount: (userData.savedGamesData > 0) ? userData.savedGamesaData.playCount + 1 : 0 + 1,
                playCount: ((gameDataArray) ? gameDataArray.length + 1: 1)
            }
            console.log('gameDataToAdd', gameDataToAdd);

            // Updating user profile data - game count
            setUserProfileData({
                _id: userData._id,
                email: userData.email,
                username: userData.username,
                userAvatar: userData.userAvatar,
                gameCount: userData.gameCount + 1,
                savedGamesData: [gameDataToAdd],
            });

            try {
                // Adding code to execute asynchronous mutation function returned by `useMutation()` hook and pass in `variables` object
                const data = await saveGameData({
                    variables: {
                        input: { ...gameDataToAdd }
                    }
                });
                console.log('data', data)

                if (error) {
                    throw new Error('Something went wrong!');
                }
                // If book successfully saves to user's account, save book id to state
                setSavedGameDataIds([...savedGameDataIds, gameDataToAdd]);

            } catch (err) {
                console.error(err);
            }
        }

    };

    // Get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    return (
        <ContentContainer>
            <Header>
                <Title>
                    <TitleHeader>
                        Flip Card Eno
                    </TitleHeader>
                </Title>
                <GameSummary>
                    The objective is to match pairs of cards until all have been flipped over and matched.
                </GameSummary>
                <GameSummary>
                    The amount of points you will achieve within the game will depend on the time you have left remaining upon completion of the challenge.
                </GameSummary>
                <TimeRemaining className="time-remaining">Time Remaining: {CountDownTimer()}</TimeRemaining>
            </Header>
            <Gameboard>
                {!gameOver &&
                    cardList.map((card, index) => (
                        <Card
                            key={index}
                            id={index}
                            name={card.name}
                            flipped={card.flipped}
                            matched={card.matched}
                            clicked={flippedCards.length === 2 ? () => { } : handleClick}
                        />
                    ))}

                {gameOver && <GameOver
                    restartGame={restartGame}
                    username={userData.username}
                    score={document.querySelector(".countdown-timer").innerHTML}
                    highscore={userData.savedGamesData[userData.savedGamesData.length - 1].highScore}
                    updateGameData={updateGameData}
                />}
            </Gameboard>
        </ContentContainer>
    );
};

export default FlipCardEno;