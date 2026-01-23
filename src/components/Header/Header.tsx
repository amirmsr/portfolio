import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        maxWidth: "1130px",
        marginLeft: "0",
        marginRight: "0",
        margin: "0 auto",
        backgroundColor: "none",
        paddingTop: "30px",
        marginBottom: "100px",
      }}
    >
      <Container>
        <Navbar.Brand href="/">[ Amir Mansour ]</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/photo-section">projet</Nav.Link>
            <Nav.Link href="/merch">merch</Nav.Link>            
            <Nav.Link href="/contact">contact</Nav.Link>
            <Nav.Link href="/about">à propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
