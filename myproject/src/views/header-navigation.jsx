import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function HeaderNavigation() {
  let navigate = useNavigate();

  const logout = () => navigate("/");
  const navHome = () => navigate("/welcome-home");
  const navExplore = () => navigate("/explore");
  const navMessage = () => navigate("/messages");

  return (
    <Navbar
      bg="secondary bg-opacity-75"
      variant="dark"
      expand="lg"
      sticky="top"
      className="text-danger"
    >
      <Container fluid>
        <Navbar.Brand href="#home">BOOKaRT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/welcome-home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Help?
            </Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
