import styled from 'styled-components'

// MEDIA QUERIES
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

// Navigation Bar Styling
export const Navbar = styled.nav`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
`

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
`

export const NavbarBrand = styled.div`
    color: #ffffff;
    display: inline-block;
    font-family: 'Elianto', sans-serif;
    font-size: 1.75rem;
    line-height: inherit;
    margin-right: 1rem;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        color: #d10f6f;
        text-decoration: none;
    }
`

export const NavbarToggler = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    border-color: rgba(255,255,255,.1);
    border-radius: .25rem;
    color: rgba(255,255,255,.5);
    font-size: 1.25rem;
    line-height: 1;
    padding: .25rem .75rem;
`

export const NavbarTogglerIcon = styled.div`
    background: 50%/100% 100% no-repeat;
    background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);
    content: "";
    display: inline-block;
    height: 1.5em;
    vertical-align: middle;
    width: 1.5em;
`

export const NavbarCollapse = styled.div`
    display: flex!important;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    margin-left: auto;
    padding-left: 0;
    ${mq[2]} {
        flex-direction: row;
    }
`

export const NavLink = styled.div`
    color: hsla(0,0%,100%,.5);
    display: block;
    padding: .5rem 1rem;
    &:hover {
        color: hsla(0,0%,100%,.75);
    }
`

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
    font-size: 1.5rem;
    height: 100px;
    margin: 0 auto;
    max-width: 920px;
    opacity: 1;
    padding-top: 40px;
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

