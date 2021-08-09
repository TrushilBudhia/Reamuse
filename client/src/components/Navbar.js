import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Auth from '../utils/auth';
import '../styles/style.css'

const AppNavbar = () => {
  // Set modal display state
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className='bg-navy' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Reamuse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                <Nav.Link as={Link} to='/dashboard'>
                  Dashboard
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              )}
              {/* If user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/highscores'>
                    Highscores
                  </Nav.Link>
                  {/* When the user clicks the logout button, the token is removed and they are logged out */}
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to='/loginsignup'>Login/Sign Up</Nav.Link>

              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
};

export default AppNavbar;
