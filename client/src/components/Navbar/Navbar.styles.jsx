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
    padding: 0.5rem 1rem;
    ${mq[1]} {
        padding: 0.5rem 1rem;
    }
`

export const Container = styled.div`
    display: block;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
    ${mq[1]} {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
    }
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
    display: block;
    font-size: 2rem;
    line-height: 1;
    margin: 0.5rem 0.5rem;
    padding: 0.25rem .25rem;
    position: absolute;
    right: 0;
    top: 0;
    &:hover {
        color: hsla(0,0%,100%,.75);
    }
    ${mq[1]} {
        display: none;
    }
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
    display: none;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0.5rem;
    overflow: hidden;
    padding-left: 0;
    position: relative;
    ${mq[1]} {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-top: 0rem;
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