import styled from 'styled-components'

// VARIABLES
const cardHeight = `210px`;
const cardWidth = `150px`;

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Flip Card Eno CONTAINER Styling
export const ContentContainer = styled.main`
    background-color: transparent;
    border-radius: .3rem;
    color: #ffffff;
    margin-bottom: 2rem;
    padding: 1rem 1rem;
    ${mq[0]} {
        padding: 2rem 2rem;
    }
`
// Flip Card Eno HEADER Styling
export const Header = styled.header`
    color: #ffffff;
    margin: auto;
    max-width: 1200px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    position: relative;
`

export const Title = styled.div`
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 100%;
    ${mq[3]} {
        width: 80%;
    }
`

export const TitleHeader = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 3rem;
    font-style: none;
    text-align: center;
    text-decoration: none;
`

export const GameSummary = styled.p`
    color: #ffffff;
    font-size: 1.5rem;
    height: 100%;
    text-align: center; 
    width: 100%;
`

export const GameTimer = styled.p`
    color: #ffffff;
    padding-left: 0.3rem;
    text-align: center;
`

export const TimeRemaining = styled.p`
    align-items: center;
    color: #ffffff;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
`

// Flip Card Eno - GAMEBOARD Styling
export const Gameboard = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: -15px;
    margin: 0 auto;
    perspective: 1000px;
    width: 100%;
    ${mq[2]} {
        width: 50%;
    }
`
// Flip Card Eno - CARD Styling
export const Card = styled.div`
    box-sizing: border-box;
    height: ${cardHeight};
    margin: 16px;
    padding: 10px;
    position: inline-block;
    text-align: center;
    transition: 0.6s;
    transform-style: preserve-3d;
    user-select: none;
    width: ${cardWidth};
`

export const Back = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    line-height: 110px;
    backface-visibility: hidden;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.6s;
    height: 100%;
    width: 100%;
`

export const BackImage = styled.div`
    border-radius: 5px;
    height: ${cardHeight};
    width: ${cardWidth};
    vertical-align: middle;
`

export const Front = styled.div`
    line-height: 110px;
    text-emphasis: none;
    transform: rotateY(180deg);
`

export const FrontImage = styled.div`
    border-radius: 5px;
    height: ${cardHeight};
    width: ${cardWidth};
    vertical-align: middle;
`

// Victory Message Styling
export const VictoryMessage = styled.h3`
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    font-style: none;
    text-align: center;
    text-decoration: none;
`

export const ButtonMagenta = styled.button`
    background-color: #a7326c;
    border: 1px solid #9d1b5c;
    border-radius: .25rem;
    color: #ffffff;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 400;
    left: 28%;
    line-height: 1.5;
    margin-top: 1.1rem;
    margin-right: 0.5rem;
    padding: 0.5rem 4rem;
    position: relative;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    -webkit-user-select: none;
    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
        color: #ffffff;
    }
`