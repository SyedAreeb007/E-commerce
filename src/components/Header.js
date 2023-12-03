import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from "../assets/images/logo.png";




export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="d-flex ms-auto bg-light text-dark">
                <Container fluid  style={{ textAlign: 'center' }}>
                    <Navbar.Brand className={"text-dark"} href="#">  <Link to={'/'} style={{ textDecoration: 'none', color: 'dark' }}> <img src={image}></img> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav text-dark" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className={"text-dark"} > <Link to={'/About'} style={{ textDecoration: 'none', color: 'dark' }}> About </Link> </Nav.Link>
                            <Nav.Link> <Link to={'/Contact'} style={{ textDecoration: 'none', color: 'dark' }}> Contact Us </Link> </Nav.Link>
                            <Nav.Link className={"text-dark"} > <Link to={'/SecurityUpdate'} style={{ textDecoration: 'none', color: 'dark' }}> Timetable </Link> </Nav.Link>
                            <Nav.Link className={"text-dark"} > <Link to={'/SecurityUpdate'} style={{ textDecoration: 'none', color: 'dark' }}> Live Location </Link> </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                        <Button variant="danger">Sign In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}






