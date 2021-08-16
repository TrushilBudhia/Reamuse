import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../../styles/style.css'
import { Navbar, Container, NavbarBrand, NavbarToggler, NavbarCollapse, Nav, NavLink } from './Navbar.styles';
import { FaBars } from "react-icons/fa";

const openNavbar = () => {
  let linkSelect = document.querySelector('.links');
  console.log('linkSelect', linkSelect);
  if (linkSelect.style.display === "block") {
    linkSelect.style.display = "none";
  } else {
    linkSelect.style.display = "block";
  }
}

const AppNavbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <NavbarBrand as={Link} to='/'>
            REAMUSE
          </NavbarBrand>
          <NavbarToggler onClick={openNavbar} aria-controls='navbar'>
            <FaBars />
          </NavbarToggler>
          <NavbarCollapse id='navbar'>
            <Nav className='links'>
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
                      High Scores
                    </NavLink>
                  </Link>
                  {/* When the user clicks the logout button, the token is removed and they are logged out */}
                  <Link to='/' onClick={Auth.logout}>
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
