import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../styles/style.css'
import { Navbar, Container, NavbarBrand, NavbarToggler, NavbarTogglerIcon, NavbarCollapse, Nav, NavLink } from '../styles/style.jsx';

const AppNavbar = () => {
  return (
    <>
      <Navbar className='bg-navy' variant='dark' expand='lg'>
        <Container fluid>
          <NavbarBrand as={Link} to='/'>
            Reamuse
          </NavbarBrand>
          {/* <NavbarToggler aria-controls='navbar'>
            <NavbarTogglerIcon />
          </NavbarToggler> */}
          <NavbarCollapse id='navbar'>
            <Nav>
              <Link to='/'>
                <NavLink>
                  Home
                </NavLink>
              </Link>
              {/* If user is logged in show dashboard, highscores and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Link to='/dashboard'>
                    <NavLink>
                      Dashboard
                    </NavLink>
                  </Link>
                  <Link to='/highscores'>
                    <NavLink>
                      Highscores
                    </NavLink>
                  </Link>
                  {/* When the user clicks the logout button, the token is removed and they are logged out */}
                  <Link onClick={Auth.logout}>
                    <NavLink>
                      Logout
                    </NavLink>
                  </Link>
                </>
              ) : (
                <Link as={Link} to='/login'>
                  <NavLink>
                    Login/Sign Up
                  </NavLink>
                </Link>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
