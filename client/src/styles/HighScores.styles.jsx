import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Dashboard Styling
export const ContentContainer = styled.main`
    color: #ffffff;
    margin-top: 2rem;
    width: 100%;
    ${mq[2]} {
        margin-top: 4rem;
    }
`

export const Header = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    max-width: 1200px;
    padding-top: 1rem;
    padding-bottom: 4rem;
    position: relative;
`

export const Title = styled.div`
    margin-bottom: 3rem;
    width: 100%;
    ${mq[3]} {
        width: 80%;
    }
`

export const TitleHeader = styled.div`
    color: #ffffff;
    font-family: 'Gamlangdee', sans-serif;
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
`

export const HighScoresTable = styled.div`
    border: 0.2rem solid #ffffff;
    font-size: 2rem;
    margin: 1rem 0rem 1rem 0rem;
    padding: 2rem 1rem;
    text-align: center;
    width: 90%;
    ${mq[1]} {
        margin: 2rem 0rem 2rem 0rem;
        width: 80%;
    }
`

export const TableHeader = styled.h3`
    border-bottom: 0.1rem solid #ffffff;
    font-family: 'Elianto', sans-serif;
    font-size: 2.2rem;
    font-weight: 200;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
`

export const TableContent = styled.div`
    font-size: 2rem;
    margin: 0.5rem 0rem 0.5rem 0rem;
    text-align: center;
    width: 100%;
    &span {
        font-size:5rem;
    }
    ${mq[1]} {
        margin: 0 auto;
        width: 80%;
    }
`

export const TableCell = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    ${mq[2]} {
        margin: 0 auto;
        width: 70%;
    }
`

// export const Content = styled.div`
//     font-size: 2rem;
//     margin: 1rem 0rem 1rem 0rem;
//     text-align: center;
//     width: 100%;
//     ${mq[1]} {
//         margin: 2rem 0rem 2rem 0rem;
//         width: 86%;
//     }
// `