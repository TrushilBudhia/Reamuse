import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Flip Card Eno Styling
export const ContentContainer = styled.main`
    background-color: transparent;
    border-radius: .3rem;
    color: #ffffff;
    margin-bottom: 2rem;
    padding: 2rem 1rem;
    ${mq[0]} {
        padding: 3rem 2rem;
    }
`

export const Header = styled.header`
    color: #ffffff;
    margin: auto;
    max-width: 1200px;
    padding-top: 1rem;
    padding-bottom: 4rem;
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
    font-size: 1.75rem;
    height: 100%;
    text-align: center; 
    width: 100%;
`
export const GameTimer = styled.p`
    color: #ffffff;
    padding-left: 0.3rem;
    text-align: center;
`
export const GameBoard = styled.main`
    max-width: 50%;
`

