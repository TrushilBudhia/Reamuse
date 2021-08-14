import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export const ButtonsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    margin-top: 3rem;
    width: 100%;
    ${mq[3]} {
        justify-content: flex-start;
        margin-top: 2rem;
    }
`

export const ButtonField = styled.button`
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 0.5rem;
    color: #747474;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0.3rem 0.7rem 0.3rem 0rem;
    padding: 0.3rem 1.4rem;
    text-decoration: none;
    &:hover {
        background-color: #a7326c;
        border: 1px solid #9d1b5c;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
        color: #ffffff;
    };

    &:focus {
        background-color: #0069d9 !important;
        border-color: #014b9a !important;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;
        color: #ffffff;
    };

    &:active {
        background-color: #0069d9 !important;
        border-color: #014b9a !important;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) !important;  
        color: #ffffff;
    };
    ${mq[2]} {

    }
`

export const ImgStyled = styled.img`
    display: none;
    height: 0;
    width: 0;
`