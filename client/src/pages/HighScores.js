import React from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import '../styles/style.css'
import { ContentContainer, Header, Title, TitleHeader, HighScoresTable, TableHeader, TableContent, TableCell } from '../styles/HighScores.styles.jsx'

const HighScores = () => {
    // Setting up useQuery
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || {};
    console.log('userData', userData);

    const flipCardDataArray = (userData.savedGamesData) ?
        userData.savedGamesData.filter((gameData) => gameData.gameId === "flip-card-eno")
        : [];
    console.log('userData.savedGamesData', userData.savedGamesData);
    console.log('flipCardDataArray', flipCardDataArray);

    const sortedFlipCardDataArray = flipCardDataArray.sort((a, b) => parseFloat(b.highScore) - parseFloat(a.highScore));
    console.log('sortedFlipCardDataArray', sortedFlipCardDataArray);

    // const highScoreValue = ;

    // If data isn't here yet, display Loading
    if (loading) {
        return <Header><h2>Loading...</h2></Header>;
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        window.location.href = "/login";
        return false;
    }

    return (
        <ContentContainer>
            <Header>
                <Title>
                    <TitleHeader>HIGH SCORES</TitleHeader>
                </Title>
                <HighScoresTable>
                    <TableHeader>{sortedFlipCardDataArray[0].gameTitle}</TableHeader>
                    <TableContent>
                        <TableCell>
                            <p>Score:</p>
                            <span>{sortedFlipCardDataArray[0].highScore}</span>
                        </TableCell>
                    </TableContent>
                    <TableContent>
                        <TableCell>
                            <p>Date:</p>
                            <span>{sortedFlipCardDataArray[0].highScoreDate}</span>
                        </TableCell>
                    </TableContent>
                </HighScoresTable>
                {/* <Content>The stars have yet to align</Content>
                <Content>Work in progress...</Content> */}
            </Header>
        </ContentContainer>
    );
};

export default HighScores;
