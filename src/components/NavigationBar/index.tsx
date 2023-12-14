import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Button, Navbar } from "react-bootstrap";

import logo from "assets/svg/logo.svg";
import { useRouter } from "next/router";

export const NavigationBar = (): JSX.Element => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="header">
      <Navbar expand="sm" className="header__container">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <div className="logo">
                <Image alt="" src={logo} layout="intrinsic" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <div
              className={`nav-text-title ${isClient ? "start-animation" : ""}`}
            >
              <Link href="/">DSC Waseda</Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbarCollaps">
            <Nav className="ms-auto gradient-container">
              {/*  */}

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
                <Link href={router.pathname} locale={router.locale == "en" ? "ja" : "en"}>
                  Toggle
                </Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <a href="https://forms.gle/uewfWU2QZjpHmSqc9" target="_blank">
                  <Button variant="outline-dark" className="butto">
                    <small>More</small>
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
