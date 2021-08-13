import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export const MapContent = styled.div`
    align-items: center;
    display: none;
    max-width: 585px;
    ${mq[3]} {
        display: flex;
    }
`

export const WorldMap = styled.div`
    width: 100%;
`
