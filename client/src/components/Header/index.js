import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export function Header() {
  return (
        <Container className ="container-fluid">
            <div className="header-container">
                <h1>Google Book Search</h1>
                <h3>Search for and Save Books of your Interest</h3>
            </div>
        </Container>
    );
}

export default Header;