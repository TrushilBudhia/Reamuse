import styled from 'styled-components'

// VARIABLES
const cardHeight = `210px`;
const cardWidth = `150px`;
const cardHeightTablet= `140px`;
const cardWidthTablet = `100px`;
const cardHeightMobile= `112px`;
const cardWidthMobile = `80px`;

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
    padding: 1rem 0.5rem;
    text-align: center; 
    width: 100%;
`

export const GameTimer = styled.p`
    color: #ffffff;
    padding-left: 0.3rem;
    text-align: center;
`

export const TimeRemaining = styled.div`
    align-items: center;
    color: #ffffff;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    padding: 1.2rem 0rem;
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
        width: 80%;
    }
    ${mq[3]} {
        width: 60%;
    }
`
// Flip Card Eno - CARD Styling
export const CardItem = styled.div`
    box-sizing: border-box;
    height: ${cardHeightMobile};
    margin: 16px;
    padding: 10px;
    position: inline-block;
    text-align: center;
    transform-style: preserve-3d;
    transition: 0.6s;
    user-select: none;
    width: ${cardWidthMobile};
    div {
        backface-visibility: hidden;
        left: 0;
        position: absolute;
        top: 0;
        transition: 0.6s;
        height: 100%;
        width: 100%;
    }
    &.flipped {
        transform: rotateY(180deg);
    }
    &.matched {
      transform: rotateY(180deg);
        .front {
            animation: selected 0.8s 0s ease 1;
            animation-fill-mode: both;
            box-shadow: 0 0 0 2px rgba(#000, 0.05) inset;
            opacity: 0.2;
        }
    }   

    ${mq[0]} {
        height: ${cardHeightTablet};
        width: ${cardWidthTablet};
    }
    ${mq[1]} {
        height: ${cardHeight};
        width: ${cardWidth};
    }
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
    &:hover {
        // opacity: 0.8;
        transform: rotateY(20deg);
    }
`

export const BackImage = styled.img`
    border-radius: 5px;
    height: ${cardHeightMobile};
    width: ${cardWidthMobile};
    vertical-align: middle;
    ${mq[0]} {
        height: ${cardHeightTablet};
        width: ${cardWidthTablet};
    }
    ${mq[1]} {
        height: ${cardHeight};
        width: ${cardWidth};
    }
`

export const Front = styled.div`
    line-height: 110px;
    text-emphasis: none;
    transform: rotateY(180deg);
`

export const FrontImage = styled.img`
    border-radius: 5px;
    height: ${cardHeightMobile};
    width: ${cardWidthMobile};
    vertical-align: middle;
    ${mq[0]} {
        height: ${cardHeightTablet};
        width: ${cardWidthTablet};
    }
    ${mq[1]} {
        height: ${cardHeight};
        width: ${cardWidth};
    }
`

// Victory Message Styling
export const VictoryMessage = styled.h3`
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    font-style: none;
    padding: 1rem 0rem;
    text-align: center;
    text-decoration: none;
`

export const ButtonMagenta = styled.button`
    background-color: #a7326c;
    border: 1px solid #9d1b5c;
    border-radius: .25rem;
    color: #ffffff;
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    // left: 28%;
    line-height: 1.5;
    margin: 0 auto;
    margin-top: 1.1rem;
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