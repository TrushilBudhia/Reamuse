import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Login/Sign Up Form Styling
export const LoginSignUpWrapper = styled.div`
    border-radius: 5px;
    box-shadow: 0px 2px 7px rgba(0,0,0,0.2);
    color:#ffffff;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 2em;
`

export const TabButton = styled.div`
    font-size: 1.2rem;
    height: 100px;
    margin: 0 auto;
    max-width: 920px;
    opacity: 1;
    padding-top: 40px;
    ${mq[1]} {
        font-size: 1.5rem;
    }
    ${mq[2]} {
        margin-bottom: 1em;
    }
`

export const Form = styled.form`
    margin: 0 auto;
    max-width: 920px;
    // width: 50%;
`

export const FormGroup = styled.div`
    margin-bottom: 1rem;    
`

export const FormField = styled.div`
    margin-bottom: 1rem;
`

export const FormLabel = styled.label`
    display: block;
    font-size: 1.25rem;
    margin-bottom: .5rem;
`

export const FormControl = styled.p`
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: inherit;
`

export const Input = styled.input`
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-color: #dbdbdb;
    border-radius: .25rem;
    color: #495057;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    height: calc(1.5em + .75rem + 2px);
    line-height: 1.5;
    padding: .375rem .75rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%;
    &:focus {
        background-color: #fff;
        border-color: #ce3e7a;
        box-shadow: 0 0 0 0.2rem rgb(255 0 123 / 25%);
        color: #495057;
        outline: 0;
    }
`