import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export const FeaturedContinentLanding = styled.div`
    margin: auto;
    // margin-left: -0.5rem;
    // margin-right: -0.5rem;
    position: relative;
    text-align: center;
`

export const FeaturedContent = styled.div`
    background-color: #8d255a;
    font-family: 'Lato', sans-serif;
    // margin-bottom: -0.5rem;
    padding-bottom: 1rem;
    &:after {
        background-color: #8d255a;
        height: 100%;
        left: 50%;
        // margin-left: -50vw;
        position: absolute;
        top: 0;
        width: 100vw;
        z-index: -1;
    }
`

export const CloseBtn = styled.div`
    color: #000000;
    margin-top: 55px;
    margin-left: 80%;
    position: absolute;
    z-index: 2;
    &:hover {
        cursor: pointer;
    },

    &:before {
        content: url("/assets/images/ic_close.svg");
    },
`

export const ArrowUpContainer = styled.div`
    background: transparent;
    height: 25px;
`

export const ArrowUp = styled.div`
    background-color: transparent;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 25px solid #8d255a;
    box-shadow: 0 1px 1px -1px #8d255a;
    left: 44%;
    position: absolute;
    max-width: 100%;
    ${mq[0]} {
        left: 46%;
    }
    ${mq[1]} {
        left: 48%;
    }
`

export const ContinentHeader = styled.div`
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    padding: 96px 0 33px 0;
`

export const SubHeader = styled.div`
    color: #ffffff;
    display: table;
    font-weight: 300;
    line-height: 1.5rem;
    margin: 0 auto;
    max-width: 897px;
    padding: 0 30px;
`

export const Description = styled.div`
    color: #ffffff;
    display: table;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5rem;
    margin: 0 auto;
    max-width: 897px;
    padding: 0.5rem 1rem 2rem 1rem;
`

export const Quote = styled.div`
    color: #ffffff;
    font-family: 'MetricNavy', sans-serif;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 700;
    margin: 0 auto;
    margin-bottom: 2rem; 
    margin-top: 1rem;
    max-width: 897px;
    padding: 0 1rem;
`

export const ButtonLight = styled.button`
    background-color: #ffffff;
    border: 1px solid #fff0ff;
    border-radius: .25rem;
    color: #747474;
    display: inline-block;
    font-size: 1rem;
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
        background-color: #0c0c35;
        border: 1px solid #0d0d22;
        color: #ffffff;
        text-decoration: none;
    }
`

export const HorizontalLine = styled.div`
    border: none;
    color: #ffffff;
    height: 1px;
    margin: 0 auto;
    max-width: 300px;
    opacity: 0.5;
    padding-bottom: 2rem;
    padding-top: 2rem;
`
