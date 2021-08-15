import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Home Page Styling
export const ContentContainer = styled.main`
    background-color: transparent;
    border-radius: .3rem;
    color: #ffffff;
    margin-bottom: 2rem;
    padding: 2rem 1rem;
    ${mq[0]} {
        padding: 7rem 2rem;
    }
`

export const WelcomeContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    z-index: 1;
    ${mq[0]} {
        max-width: 540px;
    }
    ${mq[1]} {
        max-width: 720px;
    }
    ${mq[2]} {
        max-width: 960px;
    }
    ${mq[3]} {
        max-width:1140px;
    }
`
export const WelcomeHeader = styled.div` 
    font-family: 'Elianto', sans-serif;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 0;
`

export const WelcomeParagraph = styled.div`
    font-family: 'Elianto', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #212529; 
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-right: 0.5rem;
    padding: 0.5rem 4rem;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    -webkit-user-select: none;
`

export const ButtonMagenta = styled.button`
    background-color: #a7326c;
    border: 1px solid #9d1b5c;
    border-radius: .25rem;
    color: #ffffff;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 1.1rem;
    margin-right: 0.5rem;
    padding: 0.5rem 4rem;
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

export const ButtonBlue = styled.button`
    background-color: #0069d9;
    border-color: #0062cc;
    border-radius: .25rem;
    color: #ffffff;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 1.1rem;
    margin-right: 0.5rem;
    padding: 0.75rem 4rem;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    -webkit-user-select: none;
    &:hover {
        background-color: #a7326c;
        border: 1px solid #9d1b5c
        color: #ffffff;
        text-decoration: none;
    }
`

export const LightText = styled.div`
    color: #ffffff;
`

export const DarkText = styled.div`
    color: ##212529;
`

export const Error = styled.div`
    color: #ff1039;
    font-size: 1.2rem;'
    margin: 1.5rem 0;
`

