import React, { useState, useEffect, Fragment } from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import "./styles.scss";
import { ContentContainer, Header, Title, TitleHeader, GameSummary, GameTimer, TimeRemaining, Gameboard } from './FlipCardEno.styles'


const FlipCardEno = () => {
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
        "flipcard-6",
        "flipcard-6"
    ];

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
    const [time, setTime] = React.useState(startTime);
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

    return (
        <ContentContainer>
            <Header>
                <Title>
                    <TitleHeader>
                        Flip Card Eno
                    </TitleHeader>
                </Title>
                <GameSummary>
                    The amount of points you will achieve within the game will depend on the time you have left remaining upon completion of the challenge.
                </GameSummary>
                <TimeRemaining>Time Remaining: {CountDownTimer()}</TimeRemaining>
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

                {gameOver && <GameOver restartGame={restartGame} score={document.querySelector(".countdown-timer").innerHTML} />}
            </Gameboard>
        </ContentContainer>
    );
};

export default FlipCardEno;