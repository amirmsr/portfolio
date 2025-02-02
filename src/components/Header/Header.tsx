import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header: React.FC = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor:"none", paddingTop:"30px"}}>
      <Container>
        <Navbar.Brand href="/">Amir Mansour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/photo-section">Projet</Nav.Link>
            {/* <Nav.Link href="/apropos">À propos</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
