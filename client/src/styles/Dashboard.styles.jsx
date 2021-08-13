import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Dashboard Styling
export const Header = styled.main`
    margin: auto;
    max-width: 1200px;
    padding-top: 1rem;
    padding-bottom: 4rem;
    position: relative;
`

export const RegionInfo = styled.div`
    width: 100%;
    ${mq[3]} {
        width: 50%;
    }
`

export const Title = styled.div`
    margin-bottom: 32px;
    width: 100%;
    ${mq[3]} {
        width: 80%;
    }
`

export const TitleHeader = styled.div`
    color: #ffffff;
    font-family: 'Gamlangdee', sans-serif;
    font-size: 2.5rem;
    margin: 0px;
    text-align: center;
`

export const MapButtons = styled.div`
    display: flex;
    font-family: 'Lato', sans-serif;
    margin-top: 60px !important;
`

export const Description = styled.div`
    margin-bottom: 25px;
    width: 100%;
    ${mq[3]} {
        width: 86%;
    }
`

export const DescriptionInner = styled.div`
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
`

export const Quote = styled.div`
    color: #ffffff;
    font-family: 'MetricNavy', sans-serif;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 700;
    margin: 2rem 0 2rem 1.5rem; 
`

export const FeaturedContinentLanding = styled.div`
    position: relative;
    text-align: center;
`