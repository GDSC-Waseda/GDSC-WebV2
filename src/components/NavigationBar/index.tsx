import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Button, Navbar } from "react-bootstrap";

import logo from "assets/svg/logo.svg";

export const NavigationBar = (): JSX.Element => {
  return (
    <div className="header">
      <Navbar expand="sm" className="header__container">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <div className="logo">
                <Image alt="" src={logo} layout="intrinsic" />
                <span>GDSC Waseda</span>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbarCollaps">
            <Nav className="ms-auto">
              <Nav.Item className="navItem">
                <Link href="/">Home</Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Link href="/about">About</Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Link href="/teams">Teams</Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Link href="/events">Events</Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <a
                  href="https://gdsc.community.dev/waseda-university/"
                  target="_blank"
                >
                  <Button variant="outline-dark" className="butto">
                    <small>Join Us</small>
                  </Button>
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
