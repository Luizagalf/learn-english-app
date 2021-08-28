import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#"> Let's learn English! </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Word list</Nav.Link>
                        <NavDropdown title="Learn words" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Repeat words</NavDropdown.Item>
                            <NavDropdown.Item href="#">Learn new words</NavDropdown.Item>
                            <NavDropdown.Item href="#">Select a topic</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Random</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">My progress</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;