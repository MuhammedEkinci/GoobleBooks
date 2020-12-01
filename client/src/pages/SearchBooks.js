import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, CardColumns } from "react-bootstrap";

function SearchBooks() {


    return (
        <div>
            <Container fluid>
                {/* search for books  */}
                <h5>Book Search</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Find Book" />
                </div>
                <Button style={{float:"right"}} className="search-btn" variant="primary">Search</Button>

                {/* when books are found display here */}
            </Container>
        </div>
    );
}

export default SearchBooks;