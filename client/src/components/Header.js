import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Url Shortener</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
