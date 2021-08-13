import React, { useState, useEffect, Fragment } from "react";
import '../styles/style.jsx'
import { ContentContainer, Header, Title, TitleHeader, GameSummary, GameTimer, Gameboard } from '../styles/FlipCardEno.styles.jsx'


const FlipCardGameEno = () => {

    return (
        <ContentContainer>
            <Header>
                <Title>
                    <TitleHeader>
                        Flip Card Eno
                        </TitleHeader>
                    </Title>
                <GameSummary>The amount of points you will achieve within the game will depend on the time you have left remaining upon completion of the challenge.</GameSummary>
            </Header>
        </ContentContainer>
    );
};

export default FlipCardGameEno;
